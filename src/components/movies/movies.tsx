import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import "@fontsource/noto-sans/300.css";
import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/500.css";


export const Movies = (props: any) => (
	<Flex
		direction="column"
		align="center"
		color="#fff"
		bg="#000"
		w="90%"
		position="relative"
		m="0 auto"
		mt="50px"
		fontFamily="'Noto Sans', sans-serif"
	>
		<Heading
			size="2xl"
			fontSize="3.2rem"
			fontWeight="500"
			m="2rem auto"
		>
			Movies & TV Shows
		</Heading>

		<Text
			as="p"
			fontSize="xl"
			textAlign="center"
		>
			Movies & TV Shows organized by what&apos;s
			recently trending.
		</Text>

		{props.children}
	</Flex>
);
