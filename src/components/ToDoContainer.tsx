import { Box, Grid, Typography } from "@mui/material";
import { ToDo } from "../types";
import TodoCard from "./TodoCard";
import { useTodoType } from "../hooks/useTodo";
import Empty from "../icons/Empty";

type Props = {
	getFilteredAndSortedTodos: ToDo[];
	todoState: useTodoType;
};

function ToDoContainer({ getFilteredAndSortedTodos, todoState }: Props) {
	return (
		<Box
			borderRadius={5}
			marginY={5}
			sx={{
				backgroundColor: "#F9F9F9",
				border: 1,
				borderColor: "grey.300",
				minHeight: "20em",

				// ! Aqui NO se utilizo un componente Grid de MUI porque daba problemas el gap
				padding: 2,
				display: "grid",
				gridTemplateColumns: "repeat(3, 1fr)",
				gap: "1rem",

				"@media (max-width: 600px)": {
					gridTemplateColumns: "1fr",
				},
			}}
		>
			{getFilteredAndSortedTodos.length === 0 ? (
				// Empty todos, list
				<Grid
					xs={3}
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					sx={{ gridColumn: "span 3" }}
				>
					<Empty size="6em" />
					<Typography color="GrayText" variant="h6">
						Nada para mostrar aquí...
					</Typography>
				</Grid>
			) : (
				getFilteredAndSortedTodos.map((task, i) => {
					return (
						<TodoCard key={task.id} order={i} {...task} todoState={todoState} />
					);
				})
			)}
		</Box>
	);
}

export default ToDoContainer;
