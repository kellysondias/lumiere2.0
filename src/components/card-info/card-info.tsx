import React from "react";
import { Flex } from "@chakra-ui/react";

export const CardInfo = (props: any) => (
	<Flex
		direction="column"
		justify="center"
		align="center"
		textAlign="center"
		height="100px"
		maxW="300px"
		m="0 auto"
		position="absolute"
		bottom={0}
		w="100%"
		bg="#000"
		transition="0.5s ease-in"
		css={{
			":hover": {
				backgroundColor: "transparent",
			},
		}}
	>
		{props.children}
	</Flex>
);
