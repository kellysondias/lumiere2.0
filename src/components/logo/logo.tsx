import React from "react";
import { Heading, Flex } from "@chakra-ui/react";

export const Logo = () => (
	<Flex justifyContent="center">
		<Heading as="h1"
			fontSize="2.9rem"
			fontFamily="Bebas Neue"
			color="#000"
			p="0.4rem 0.8rem"
			borderRadius="10%"
			bg="#f6c600"
		>
			Lumière
		</Heading>
	</Flex>
);
