import React from "react";
import { List } from "@chakra-ui/react";

export const CardList = (props: any) => (
	<List
		key={props.key}
		display="flex"
		flexWrap="wrap"
		w="180px"
		justifyContent="center"
		alignItems="center"
		transition="1.2s ease"
		p="1rem"
		m="0 auto"
		position="relative"
		css={{
			":hover": {
				transform: "scale(1.1)",
				div: {
					opacity: 0,
				},
			},
		}}
	>
		{props.children}
	</List>
);
