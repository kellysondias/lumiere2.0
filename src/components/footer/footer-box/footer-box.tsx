import React from "react";
import { Flex } from "@chakra-ui/react";

interface IProps {
	children: JSX.Element;
}

export const FooterBox = ({children}: IProps) => (
	<Flex
		position="relative"
		flexDirection="column"
		justifyContent="center"
		alignItems="center"
		textAlign="center"
		m="0.7rem auto"
	>
		{children}
	</Flex>
);
