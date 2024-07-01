import { Box, Button, ButtonGroup } from "@mui/material";
import NewToDo from "./NewToDo";
import { useTodoType } from "../hooks/useTodo";
import { useState } from "react";

type Props = {
	setIsOrderByPriority: (v: boolean) => void;
	setFilterBy: (v: "all" | "complete" | "incomplete") => void;

	todoState: useTodoType;
};

function TopBar({ setFilterBy, setIsOrderByPriority, todoState }: Props) {
	const [createNew, setCreateNew] = useState(false);
	return (
		<>
			<NewToDo
				todoState={todoState}
				showCreateModal={createNew}
				handleCreateModal={setCreateNew}
			/>
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
					onClick={() => setCreateNew(true)}
				>
					Agregar
				</Button>

				{/* ESTE */}
				<Box display="flex" justifyContent={"end"}>
					<ButtonGroup
						sx={{ marginRight: 4 }}
						color="secondary"
						variant="contained"
						aria-label="Basic button group"
					>
						<Button onClick={() => setIsOrderByPriority(true)}>
							Prioridad
						</Button>
						<Button onClick={() => setIsOrderByPriority(false)}>
							Creacion
						</Button>
					</ButtonGroup>
					<ButtonGroup
						color="secondary"
						variant="contained"
						aria-label="Basic button group"
					>
						<Button onClick={() => setFilterBy("all")}>Todos</Button>
						<Button onClick={() => setFilterBy("complete")}>Completos</Button>
						<Button onClick={() => setFilterBy("incomplete")}>
							Incompletos
						</Button>
					</ButtonGroup>
				</Box>
			</Box>
		</>
	);
}

export default TopBar;
