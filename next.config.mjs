/** @type {import('next').NextConfig} */
const nextConfig = {
  // Статический экспорт: все маршруты превращаются в обычные HTML-файлы,
  // поэтому прямые URL работают и после перезагрузки, и на Vercel.
  output: 'export',
  // Квота Image выдаёт 4K-оригиналы; для веба отдаём оптимизированные версии
  // из public/images/, а originals остаются в public/images/generated/.
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
