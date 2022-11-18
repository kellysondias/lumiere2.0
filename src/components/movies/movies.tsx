import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

interface IProps {
	children: JSX.Element;
}

export const Movies = ({children}: IProps) => (
	<Flex
		direction="column"
		align="center"
		color="#fff"
		bg="#000"
		w="90%"
		position="relative"
		m="0 auto"
		mt="50px"
	>
		<Heading
			size="2xl"
			color="#f5c518"
			fontSize="3.2rem"
			fontWeight="500"
			m="2rem auto"
		>
			Featured Movies
		</Heading>

		<Text
			as="p"
			fontSize="xl"
			textAlign="center"
		>
			Here you can find all the movies in our database organized by what&apos;s
			recently trending among movie goers 😉 .
		</Text>

		<>
			{children}
		</>
	</Flex>
);
