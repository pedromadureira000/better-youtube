import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
  name: "Better Youtube",
  description: "Remove the Youtube home page and recommendations, and make some other improvements.",
  version: '0.0.1',
  manifest_version: 3,
  icons: {
    128:"src/assets/img/icon.png"
  },
  action: {
    default_icon: {
      "16": "src/assets/img/icon.png",
      "24": "src/assets/img/icon.png",
      "32": "src/assets/img/icon.png"
    },
    default_title: "Tintim Locals",
    default_popup: "popup.html"
  },
  background: {
    service_worker: 'src/background.js',
    type: 'module',
  },
  content_scripts: [
    {
      matches: ["https://*.youtube.com/*"],
      js: ["src/contentScript.js"]
    },
  ],
  web_accessible_resources: [
    {"resources": ["src/assets/img/icon.png"], "matches": ["https://*.youtube.com/*"]},
    {"resources": ["src/utils.js"], "matches": ["https://*.youtube.com/*"]},
    {"resources": ["src/settings.js"], "matches": ["https://*.youtube.com/*"]}
  ],
  permissions: ["storage"],
  host_permissions: ["https://*.youtube.com/*"],
})
