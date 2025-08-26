
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/Sh0taNet/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/Sh0taNet/home",
    "route": "/Program%20Files/Git/Sh0taNet"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PHDEG53S.js"
    ],
    "route": "/Program%20Files/Git/Sh0taNet/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VZB5DL3O.js"
    ],
    "route": "/Program%20Files/Git/Sh0taNet/auth"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FODYLU7Q.js"
    ],
    "route": "/Program%20Files/Git/Sh0taNet/profile"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WYRQ77XO.js"
    ],
    "route": "/Program%20Files/Git/Sh0taNet/posts"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HXFTIWTA.js"
    ],
    "route": "/Program%20Files/Git/Sh0taNet/messages"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/Sh0taNet/home",
    "route": "/Program%20Files/Git/Sh0taNet/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1785, hash: '9337d8a1fbd24012bd7ae6705347716aa552d9173ebc7dfa02d1d07050814c2f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1093, hash: '6232974267bbb4f198733478b5b92e299f7d6f10aa9ef10ca9d14b013128d289', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-2KTZDTKC.css': {size: 3340, hash: 'jseYrNawXpc', text: () => import('./assets-chunks/styles-2KTZDTKC_css.mjs').then(m => m.default)}
  },
};
