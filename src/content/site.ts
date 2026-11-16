/**
 * Общие данные о сайте: имя, роль, навигация, мета-описания.
 *
 * ВСЕ ТЕКСТЫ САЙТА ЛЕЖАТ В ЭТОЙ ПАПКЕ (src/content/).
 * Чтобы поменять текст — правьте соответствующий файл, вёрстку трогать не нужно.
 */

export const site = {
  monogram: 'EN',
  name: 'Евгений Наконечный',
  nameUpper: 'ЕВГЕНИЙ НАКОНЕЧНЫЙ',
  friendly: 'Женя',
  role: 'AI-специалист / инженер автоматизации и интеграций',
  roleShort: 'AI / IT',
  location: 'Санкт-Петербург',
  edition: 'ПОРТФОЛИО · 2026',
  tagline: 'Превращаю задачи бизнеса в работающие AI-системы.',
  description:
    'Персональное IT-портфолио Евгения Наконечного: AI-агенты, автоматизация бизнес-процессов, n8n, Telegram, API-интеграции. Проектирую, собираю и проверяю решения.',
  /** Заголовок по умолчанию для внутренних страниц. */
  defaultPageTitle: 'Евгений Наконечный — AI-специалист',
} as const;

export type NavItem = {
  href: string;
  label: string;
  /** Стрелка ↗ у внешних или «открывающих» ссылок. */
  external?: boolean;
};

export const nav: NavItem[] = [
  { href: '/projects', label: 'Проекты' },
  { href: '/about', label: 'Обо мне' },
  { href: '/journal', label: 'Журнал' },
  { href: '/resume', label: 'Резюме', external: true },
];

/**
 * Портрет. Файл — public/images/portrait.jpg.
 * Заменить: положить своё фото тем же именем и обновить alt.
 */
export const portrait = {
  src: '/images/portrait.jpg',
  alt: 'Евгений Наконечный — AI-специалист, инженер автоматизации и интеграций',
} as const;
