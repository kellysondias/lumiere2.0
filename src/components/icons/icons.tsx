import React from "react";
import { List } from "@chakra-ui/react";

interface IProps {
	children: JSX.Element;
}

export const Icons = ({children}: IProps) => (
	<List
		as="ul"
		flexWrap="wrap"
		justifyContent="center"
		alignContent="center"
		alignItems="center"
		textAlign="center"
		m="10px auto"
		p="0"
	>
		{children}
	</List>
);
