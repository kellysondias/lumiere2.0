import icon from "../../assets/img/portfolio-icon.png";
import React from "react";
import {
	Box,
	Flex as HeaderSection,
	Spacer,
	Image,
	Link,
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
		<Box>
			<Link href="https://meu-portfolio-dusky.vercel.app/" isExternal>
				<Image src={icon} alt="Go to Kellyson Dias's portfolio" boxSize="40px" />
			</Link>
		</Box>
	</HeaderSection>
);
