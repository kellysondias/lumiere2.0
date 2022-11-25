import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import { FooterBox } from "./footer-box/footer-box";
import { Icons } from "../icons/icons";
import { Icon } from "../icon/icon";

export const Footer: React.FC = () => (
	<Box pb="1.5rem">
		<FooterBox>
			<>
				<Icons>
					<>
						<Icon
							target="_blank"
							link="https://www.linkedin.com/in/kellysondias/"
							icon="fab fa-linkedin-in"
							hover="#f6c600"
						/>
						<Icon
							target="_blank"
							link="https://wa.me/5543999702430"
							icon="fab fa-whatsapp"
							hover="#f6c600"
						/>
						<Icon
							target="_blank"
							link="https://github.com/kellysondias"
							icon="fab fa-github"
							hover="#f6c600"
						/>
						<Icon
							target="_blank"
							link="https://www.instagram.com/kellysondias/"
							icon="fab fa-instagram"
							hover="#f6c600"
						/>
					</>
				</Icons>
				<Box>
					<Text as="span">
						All rights reserved to
						<Link
							pl="0.3rem"
							target="_blank"
							rel="noreferrer"
							href="https://www.themoviedb.org/"
						>
							TMDB
						</Link>
					</Text>
				</Box>
			</>
		</FooterBox>
	</Box>
);
