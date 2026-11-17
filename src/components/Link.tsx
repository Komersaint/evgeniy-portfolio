import type { AnchorHTMLAttributes } from 'react';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

/**
 * Обычная ссылка вместо next/link.
 *
 * Почему не next/link: при статическом экспорте клиентский роутер Next
 * запрашивает RSC-файл вида /<route>/index.txt. Хостинг отдаёт .txt как
 * text/plain — Safari такой ответ разобрать не может и показывает служебную
 * ошибку с сырым пейлоадом вместо страницы. На отсутствующий файл хост, к
 * тому же, отвечает 404 с главной страницей, и переход уводит не туда.
 *
 * Обычная ссылка с полной перезагрузкой не зависит ни от MIME-типов, ни от
 * того, как хостинг обрабатывает 404: работает одинаково во всех браузерах.
 *
 * Слеш в конце добавляется автоматически — хостинг отдаёт /about/ (как
 * каталог с index.html), а /about без слеша уводит на главную.
 */
export default function Link({ href, children, ...rest }: LinkProps) {
  const isInternal = href.startsWith('/') && !href.startsWith('//');
  const target = isInternal && href !== '/' && !href.endsWith('/') ? `${href}/` : href;

  return (
    <a href={target} {...rest}>
      {children}
    </a>
  );
}
