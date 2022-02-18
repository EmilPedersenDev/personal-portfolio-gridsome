// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import VueFullPage from 'vue-fullpage.js';

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href:
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
    integrity:
      'sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==',
    crossorigin: 'anonymous',
    referrerpolicy: 'no-referrer',
  });
  head.link.push({
    rel: 'stylesheet',
    href: 'https://unpkg.com/fullpage.js/dist/fullpage.min.css',
  });
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(VueFullPage);
}
