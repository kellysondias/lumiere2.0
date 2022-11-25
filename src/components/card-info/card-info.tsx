import React from "react";
import { Flex } from "@chakra-ui/react";

export const CardInfo = (props: any) => (
	<Flex
		direction="column"
		justify="center"
		align="center"
		textAlign="center"
		height="26%"
		m="0 auto"
		position="absolute"
		bottom={0}
		w="89%"
		bg="#000"
		color="#fff"
		transition="0.5s ease-in"
	>
		{props.children}
	</Flex>
);
