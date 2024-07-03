import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	useMediaQuery,
} from "@mui/material";
import NewToDo from "./NewToDo";
import { useTodoType } from "../hooks/useTodo";
import { useState } from "react";

type Props = {
	setIsOrderByPriority: (v: boolean) => void;
	setFilterBy: (v: "all" | "complete" | "incomplete") => void;

	todoState: useTodoType;
	filterBy: "all" | "complete" | "incomplete";
	isOrderByPriority: boolean;
};

function TopBar({
	setFilterBy,
	setIsOrderByPriority,
	todoState,
	filterBy,
	isOrderByPriority,
}: Props) {
	const [createNew, setCreateNew] = useState(false);

	const isMobile = useMediaQuery("(max-width:600px)");
	return (
		<>
			<NewToDo
				todoState={todoState}
				showCreateModal={createNew}
				handleCreateModal={setCreateNew}
			/>
			<Box
				display="flex"
				flexWrap="wrap"
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
					fullWidth={isMobile}
					sx={{
						backgroundColor: "#FA9639",
						color: "white",
						borderRadius: 2,
						"&:hover": {
							backgroundColor: "#FCAC62",
						},
						marginBottom: isMobile ? 2 : 0,
					}}
					onClick={() => setCreateNew(true)}
				>
					Agregar
				</Button>

				<Box
					display="flex"
					justifyContent={isMobile ? "space-between" : "end"}
					flexGrow={1}
				>
					<FormControl size="small" fullWidth={isMobile}>
						<InputLabel id="Order">Ordenar por</InputLabel>
						<Select
							labelId="Order"
							value={isOrderByPriority ? 1 : 0}
							label="Age"
							sx={{
								borderRadius: 3,
								backgroundColor: "white",
								marginRight: isMobile ? 0 : 5,
							}}
							onChange={(e) => {
								setIsOrderByPriority(e.target.value === 1);
							}}
						>
							<MenuItem value={1}>Prioridad</MenuItem>
							<MenuItem value={0}>Fecha</MenuItem>
						</Select>
					</FormControl>
					<FormControl size="small" fullWidth={isMobile}>
						<InputLabel id="filter">Filtrar</InputLabel>
						<Select
							labelId="filter"
							value={filterBy}
							label="Age"
							sx={{
								borderRadius: 3,
								backgroundColor: "white",
							}}
							onChange={(e) =>
								setFilterBy(e.target.value as "all" | "complete" | "incomplete")
							}
						>
							<MenuItem value={"all"}>Todos</MenuItem>
							<MenuItem value={"complete"}>Completos</MenuItem>
							<MenuItem value={"incomplete"}>Incompletos</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</Box>
		</>
	);
}

export default TopBar;
