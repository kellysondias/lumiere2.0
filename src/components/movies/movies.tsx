import React from "react";
import { Flex } from "@chakra-ui/react";
import "@fontsource/noto-sans/300.css";
import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/500.css";


export const Movies = (props: any) => (
	<Flex
		direction="column"
		align="center"
		color="#fff"
		bg="#000"
		w="90%"
		position="relative"
		m="0 auto"
		mt="50px"
		fontFamily="'Noto Sans', sans-serif"
	>
		{props.children}
	</Flex>
);
