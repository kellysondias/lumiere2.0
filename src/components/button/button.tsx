import React from "react";
import { Button as StyledButton } from "@chakra-ui/react";

export const Button = (props: any) => (
	<StyledButton
		css={{
			":hover":{
				backgroundColor: "transparent",
			},
		}}
		onClick={props.event}
		{...props}
	>
		{props.text}
	</StyledButton>
);
