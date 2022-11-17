import React from "react";
import { themeProvider } from "./theme-provider";
import { AppRoutes } from "../src/pages/routes";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => (
	<ChakraProvider theme={themeProvider}>
		<AppRoutes />
	</ChakraProvider>

);

export default App;
