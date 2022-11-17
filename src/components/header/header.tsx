import React from "react";
import {
	Flex as HeaderSection,
	Spacer,
}
	from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Logo } from "../logo/logo";

export const Header: React.FC = () => (
	<HeaderSection
		as="header"
		p="1.7rem"
		bg="#121212"
	>
		<RouterLink to="/">
			<Logo />
		</RouterLink>
		<Spacer />
	</HeaderSection>
);
