import React from "react";
import {
	ListItem,
	Link,
	Text as I,
} from "@chakra-ui/react";

interface IProps {
	icon: string;
	link: string;
	target?: string;
	hover?: string;
}

export const Icon = ({icon, link, target, hover}: IProps) => (
	<ListItem
		display="inline"
	>
		<Link
			target={target}
			href={link}
			m="1.5rem"
			alignItems="center"
			text-align="center"
			color="#000"
			fontSize="2.5rem"
			transition="0.2s ease-in-out"
		>
			<I
				_hover={{color: `${hover}`}}
				className={icon}
			/>
		</Link>
	</ListItem>
);
