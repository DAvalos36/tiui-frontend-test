import { Box, Button, InputLabel, MenuItem, Select } from "@mui/material";
import NewToDo from "./NewToDo";
import { useTodoType } from "../hooks/useTodo";

type Props = {
	setIsOrderByPriority: (v: boolean) => void;
	setFilterBy: (v: "all" | "complete" | "incomplete") => void;

	todoState: useTodoType;
};

function TopBar({ setFilterBy, setIsOrderByPriority, todoState }: Props) {
	return (
		<>
			<NewToDo todoState={todoState} showCreateModal />
			<Box
				display="flex"
				justifyContent="space-between"
				borderRadius={5}
				sx={{
					backgroundColor: "#F9F9F9",
					padding: 2,
					border: 1,
					borderColor: "grey.300",
				}}
			>
				<Button
					variant="contained"
					sx={{
						backgroundColor: "#FA9639",
						color: "white",
						borderRadius: 2,
						"&:hover": {
							backgroundColor: "#FCAC62",
						},
					}}
					onClick={() => setIsOrderByPriority(true)}
				>
					Agregar
				</Button>
			</Box>
		</>
	);
}

export default TopBar;
