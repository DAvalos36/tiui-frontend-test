import { Box } from "@mui/material";
import { ToDo } from "../types";
import TodoCard from "./TodoCard";

type Props = {
	getFilteredAndSortedTodos: ToDo[];
};

function ToDoContainer({ getFilteredAndSortedTodos }: Props) {
	return (
		<Box
			borderRadius={5}
			marginY={5}
			sx={{
				backgroundColor: "#F9F9F9",
				border: 1,
				borderColor: "grey.300",

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
			{getFilteredAndSortedTodos.map((task, i) => {
				return <TodoCard key={task.id} order={i} {...task} />;
			})}
		</Box>
	);
}

export default ToDoContainer;
