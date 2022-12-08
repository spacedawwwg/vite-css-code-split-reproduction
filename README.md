# vite-plugin-ssr not working with `cssCodeSplit: false` setting

https://vitejs.dev/config/build-options.html#build-csscodesplit

This is the vite-plugin-ssr vue-ts template with `cssCodeSplit: false` simply added to `vite.config.ts`.

NOTE: `prerender: true` has also been set on the ssr plugin for ease of seeing the output HTML

## Reproduce
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

## Expected
A single `<link rel="stylesheet" type="text/css" href="style.abcd1234.css" />` injected into the html

## Actual
No CSS is injected into HTML

## Issue
https://github.com/brillout/vite-plugin-ssr/issues/225
