import React from "react";
import { List } from "@chakra-ui/react";

export const CardList = (props: any) => (
	<List
		display="flex"
		flexWrap="wrap"
		justifyContent="center"
		alignItems="center"
		p="0"
		m="0 auto"
	>
		{props.children}
	</List>
);
