import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    turbopack: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
  },

  webpack(config) {
    // Находим правило для файлов (чтобы не сломать next/image)
    // @ts-ignore
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    if (fileLoaderRule) {
      config.module.rules.push(
        // Для *.svg?url — оставляем как url (для <Image src={...} />)
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/,
        },
        // Всё остальное — в React-компонент
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [/url/] },
          use: ['@svgr/webpack'],
        }
      );
    } else {
      // Если правила нет — добавляем простое
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      });
    }

    return config;
  },
  reactCompiler: true,
};

export default nextConfig;
