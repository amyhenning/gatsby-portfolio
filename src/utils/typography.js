import Typography from "typography"
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 2,
	googleFonts: [
	  {
	    name: 'Poppins',
	    styles: [
	    	'300',
	    	'600',
	      '700',
	    ],
	  },
	],
  headerFontFamily: [
    "Poppins",
    "sans-serif",
  ],
  bodyFontFamily: ["Poppins", "serif"],
  headerWeight: 700,
  bodyWeight: 300,
  boldWeight: 600,
  scaleRatio: 2,
})



export default typography