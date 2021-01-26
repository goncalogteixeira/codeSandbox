module.exports = {
  future: {
     removeDeprecatedGapUtilities: true,
     purgeLayersByDefault: true,
  },
  purge: [
    "./pages/*.js", 
    "./pages/**/*.js", 
    "./components/**/*.js", 
    "./components/*.js", 

  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
