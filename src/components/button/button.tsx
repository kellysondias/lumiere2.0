import React from "react";
import { Button as StyledButton } from "@chakra-ui/react";

interface IProps {
	text?: string;
	icon?: JSX.Element;
	bg: string;
	hoverColor?: string;
	event?: () => Promise<void>;
}

export const Button = ({text, icon, bg, hoverColor, event}: IProps) => (
	<StyledButton cursor="pointer"
		transition="0.2s ease-in-out"
		fontSize="4rem"
		bg={bg}
		css={{
			":hover":{
				color: `${hoverColor}`,
				backgroundColor: "transparent",
			},
		}}
		onClick={event}
	>
		{text}
		{icon}
	</StyledButton>
);
