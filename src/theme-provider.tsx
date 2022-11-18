import { extendTheme } from "@chakra-ui/react";
import "@fontsource/lato/400.css";

export const themeProvider = extendTheme({
	styles: {
		global: {
			padding: "0",
			margin: "0",
			textDecoration: "none",
			_before: {
				boxSizing: "border-box",
    			textDecoration: "none",
			},
			_after: {
				boxSizing: "border-box",
    			textDecoration: "none",
			},
			html: {
				fontSize: "62.5%",
				m: "0 auto",
			},
			body: {
				bg: "#000",
				color: "#fff",
				fontFamily:"'Lato', sans-serif",
				fontWeight:"400",
			},
			a: {
				textDecoration: "none",
				color: "#fff",
			},
			ol: {
				listStyle: "none",
			},
		},
	},
});
