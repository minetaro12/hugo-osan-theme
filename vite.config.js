/** @type {import('vite').UserConfig} */
export default {
  build: {
    outDir: "./static/js/",
    lib: {
      entry: "./src/index.js",
      formats: ["umd"],
      name: "hugo-osan-theme",
      fileName: "bundle"
    }
  }
}