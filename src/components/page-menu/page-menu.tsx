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
		fontSize="1.5rem"
		alignItems="center"
	>
		<Button
			icon={<ChevronLeftIcon />}
			bg="#000"
			hoverColor="#f5c518"
			event={onPreviousPage}
		/>
		<Text as="span">{`Page ${page}`}</Text>
		<Button
			icon={<ChevronRightIcon />}
			bg="#000"
			hoverColor="#f5c518"
			event={onNextPage}
		/>
	</Menu>
);
