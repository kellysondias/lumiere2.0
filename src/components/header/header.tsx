import React, { useState } from "react";
import {
	Flex,
	Spacer,
	InputGroup,
	InputRightAddon,
	Input,
	Heading,
}
	from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";

export const Header: React.FC = () => {
	const [search, setSearch] = useState("");

	return (
		<Flex
			as="header"
			justify="center"
			align="center"
			p="1.7rem 5rem"
			bg="transparent"
		>
			<Link to="/">
				<Heading
					fontWeight="400"
					size="md"
				>LUMIÈRE
				</Heading>
			</Link>
			<InputGroup>
				<Spacer />
				<Input
					border="none"
					w="55px"
					variant="unstyled"
					type="text"
					fontSize="md"
					placeholder="FILTER"
					id="search-bar"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<InputRightAddon
					bg="transparent"
					border="none"
				>
					<SearchIcon
						fontSize="10px"
					/>
				</InputRightAddon>
			</InputGroup>
		</Flex>
	);
};
