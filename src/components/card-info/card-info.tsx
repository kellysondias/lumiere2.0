import React from "react";
import { Flex } from "@chakra-ui/react";

export const CardInfo = (props: any) => (
	<Flex
		direction="column"
		justify="center"
		align="center"
		textAlign="center"
		height="100px"
		m="0 auto"
		position="absolute"
		bottom={0}
		w="89%"
		bg="#000"
		transition="0.5s ease-in"
	>
		{props.children}
	</Flex>
);
