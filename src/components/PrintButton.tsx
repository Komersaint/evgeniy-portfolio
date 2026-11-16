'use client';

/**
 * Кнопка «Сохранить в PDF»: открывает системный диалог печати браузера,
 * где страница уже свёрстана под A4 (стили — в resume.css, @media print).
 */
export default function PrintButton({ label }: { label: string }) {
  return (
    <button type="button" className="btn" onClick={() => window.print()}>
      <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
        <path
          d="M5 6V2.5h6V6M5 12H3.5A1.5 1.5 0 0 1 2 10.5v-3A1.5 1.5 0 0 1 3.5 6h9A1.5 1.5 0 0 1 14 7.5v3a1.5 1.5 0 0 1-1.5 1.5H11M5 10h6v4H5z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {label}
    </button>
  );
}
