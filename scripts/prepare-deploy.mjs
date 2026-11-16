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
import { cp, rm, mkdir, writeFile } from 'node:fs/promises';
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

// На случай публикации на GitHub Pages: отключает обработку Jekyll.
await writeFile(path.join(to, '.nojekyll'), '', 'utf8');

console.log('Готово: deploy-папка собрана в dist/ (4K-оригиналы исключены).');
