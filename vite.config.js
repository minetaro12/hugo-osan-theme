/** @type {import('vite').UserConfig} */
export default {
  build: {
    outDir: "./assets/js/",
    lib: {
      entry: "./src/index.js",
      formats: ["umd"],
      name: "hugo-osan-theme",
      fileName: "bundle"
    }
  }
}