import React from "react";
import { Text, Flex as Menu} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button } from "../button/button";

interface IProps {
	page: number;
	onNextPage: () => Promise<void>;
	onPreviousPage: () => Promise<void>;
}

export const PageMenu: React.FC<IProps> = ({
	page,
	onNextPage,
	onPreviousPage,
}) => (
	<Menu
		m="0 auto 2rem auto"
		alignItems="center"
	>
		<Button
			leftIcon={<ChevronLeftIcon fontSize="5rem" />}
			bg="#000"
			event={onPreviousPage}
		/>
		<Text
			as="span"
			fontSize="1.5rem"
		>
			{`Page ${page}`}
		</Text>
		<Button
			leftIcon={<ChevronRightIcon fontSize="5rem" />}
			bg="#000"
			event={onNextPage}
		/>
	</Menu>
);
