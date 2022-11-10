let DEBUG = import.meta.env.VITE_DEBUG || !('update_url' in chrome.runtime.getManifest())

// let testt = import.meta.env.VITE_SOME_KEY;
// console.log(">>>>>>> import.meta.env.VITE_SOME_KEY: ", testt);
//
// let test = process.env.NODE_ENV
// console.log(">>>>>>> process.env.NODE_ENV: ", test)

export default {
  DEBUG: DEBUG,
}
