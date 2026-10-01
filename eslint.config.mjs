import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTypescript,
  {
    rules: {
      // Pages are a 1:1 port of the Webflow build, which ships hand-tuned srcset/sizes on plain <img> tags.
      '@next/next/no-img-element': 'off',
      // Internal links are plain <a> on purpose: every page is static and the scroll-in reveals
      // (components/ScrollReveal.tsx) expect a full page load, as on the Webflow site.
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
