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
import { Store } from "../../pages/Home/store";
import { useLocalObservable} from "mobx-react-lite";

export const Header: React.FC = () => {
	const store = useLocalObservable(() => new Store());
	const [search, setSearch] = useState("");
	// eslint-disable-next-line no-console
	console.log("SEARCH:",store.search);

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
					value={store.search}
					// eslint-disable-next-line no-console
					onChange={(e) => store.setSearch(e.target.value)}
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
