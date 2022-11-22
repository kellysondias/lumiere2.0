import React from "react";
import { Button as StyledButton } from "@chakra-ui/react";

export const Button = (props: any) => (
	<StyledButton
		css={{
			":hover":{
				color: `${props.hoverColor}`,
				backgroundColor: "transparent",
			},
		}}
		onClick={props.event}
		{...props}
	>
		{props.text}
	</StyledButton>
);
