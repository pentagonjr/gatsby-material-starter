/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-49e32c7a56b4a4cc9c9a.js"
  },
  {
    "url": "app-29b6617df201fec6a769.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-43984509067c707d022d.js"
  },
  {
    "url": "index.html",
    "revision": "e57024510ed51d51b7cde557e4d17625"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c1c8fe0459bc2d0b5eeabb5448e57ccb"
  },
  {
    "url": "1.59092e2cd087a430a4d8.css"
  },
  {
    "url": "component---src-pages-index-jsx.d71badf308d0ae084f6f.css"
  },
  {
    "url": "0.c0ca5d2347affe2f1836.css"
  },
  {
    "url": "0-b22c4ab177a364dd6421.js"
  },
  {
    "url": "component---src-pages-index-jsx-28ca22bba9802028bc5a.js"
  },
  {
    "url": "1-17ef03303a8c2401b4fa.js"
  },
  {
    "url": "static/d/173/path---index-6a9-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "2c6844454393bec03b0b093e2f52ae60"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/gatsby-material-starter/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
