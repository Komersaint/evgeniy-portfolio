/**
 * Готовит папку для деплоя.
 *
 * `next build` кладёт в out/ всё, что лежит в public/, включая 4K-оригиналы
 * изображений (22 МБ), которые вёрстка не использует. Для публикации они не
 * нужны — убираем, чтобы сайт грузился легко, а репозиторий не раздувался
 * лишними файлами.
 *
 * Оригиналы остаются в public/images/generated/ — это их каноническое место.
 */
import { cp, rm, mkdir, writeFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const from = path.join(root, 'out');
const to = path.join(root, 'dist');

if (!existsSync(from)) {
  console.error('Нет папки out/ — сначала выполните next build.');
  process.exit(1);
}

await rm(to, { recursive: true, force: true });
await mkdir(to, { recursive: true });
await cp(from, to, { recursive: true });

// Полноразмерные исходники в публикацию не попадают.
await rm(path.join(to, 'images', 'generated'), { recursive: true, force: true });

/**
 * Убираем RSC-пейлоады (*.txt) рядом с index.html.
 *
 * При клиентском переходе Next.js запрашивает файл вроде /projects/index.txt,
 * чтобы получить данные страницы без полной перезагрузки. Хостинг отдаёт .txt
 * как text/plain, клиентский роутер такой ответ разобрать не может — и вместо
 * страницы показывает служебную ошибку с сырым пейлоадом.
 *
 * Без этих файлов роутер просто делает обычную перезагрузку страницы: работает
 * так же, зато не зависит от того, как хостинг отдаёт .txt.
 */
async function removeTxtFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await removeTxtFiles(full);
    } else if (entry.name.endsWith('.txt')) {
      await rm(full, { force: true });
    }
  }
}
await removeTxtFiles(to);

// На случай публикации на GitHub Pages: отключает обработку Jekyll.
await writeFile(path.join(to, '.nojekyll'), '', 'utf8');

console.log('Готово: deploy-папка собрана в dist/ (4K-оригиналы и RSC-пейлоады исключены).');
