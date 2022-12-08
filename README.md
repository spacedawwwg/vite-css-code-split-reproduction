# vite-plugin-ssr not working with `cssCodeSplit: false` setting

This is the vite-plugin-ssr vue-ts template with `cssCodeSplit: false` simply added to `vite.config.ts`.

To reproduce the issue of the CSS not being injected into the HTML, you need to run the build in production (i.e. not in dev mode)

```
yarn install
yarn prod
```

or 

```
yarn install
yarn build
```

Issue: https://github.com/brillout/vite-plugin-ssr/issues/225
