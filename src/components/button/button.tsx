import React from "react";
import { Button as StyledButton } from "@chakra-ui/react";

interface IProps {
	text?: string;
	leftIcon?: JSX.Element;
	rightIcon?: JSX.Element;
	bg?: string;
	w?: string;
	variant?: string;
	hoverColor?: string;
	colorScheme?: string;
	fontSize?: string;
	p?: string;
	borderColor?: string;
	color?: string;
	event?: () => Promise<void>;
}

export const Button = ({text, leftIcon, rightIcon, bg, hoverColor, colorScheme, event, variant, w, fontSize, p, borderColor, color}: IProps) => (
	<StyledButton
		cursor="pointer"
		transition="0.2s ease-in-out"
		bg={bg}
		css={{
			":hover":{
				color: `${hoverColor}`,
				backgroundColor: "transparent",
			},
		}}
		variant={variant}
		leftIcon={leftIcon}
		rightIcon={rightIcon}
		width={w}
		colorScheme={colorScheme}
		size={fontSize}
		p={p}
		borderColor={borderColor}
		color={color}
		onClick={event}
	>
		{text}
	</StyledButton>
);
