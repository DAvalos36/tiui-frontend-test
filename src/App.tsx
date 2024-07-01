import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Container } from "@mui/material";

import useTodo from "./hooks/useTodo";
import { useState } from "react";
import ToDoContainer from "./components/ToDoContainer";
import TopBar from "./components/TopBar";

const dummyData = [
	{
		id: "abc",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, at exercitationem. Minima quam corrupti vero eveniet ab obcaecati dicta recusandae. Odio quos est repellat mollitia, facere nesciunt at vitae temporibus?",
		title: "prueba",
		isComplete: false,
		priority: 1,
		creationDate: "2024-06-29T18:41:00.432Z",
	},
	{
		id: "abc2",
		content:
			"Lorem ipsum dolorLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, at exercitationem. Minima quam corrupti vero eveniet ab obcaecati dicta recusandae. Odio quos est repellat mollitia, facere nesciunt at vitae temporibus? sit amet consectetur adipisicing elit. Quisquam, at exercitationem. Minima quam corrupti vero eveniet ab obcaecati dicta recusandae. Odio quos est repellat mollitia, facere nesciunt at vitae temporibus?",
		title: "prueba",
		isComplete: false,
		priority: 2,
		creationDate: "2024-06-29T18:41:00.432Z",
	},
	{
		id: "abc3",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, at exercitationem. Minima quam corrupti vero eveniet ab obcaecati dicta recusandae. Odio quos est repellat mollitia, facere nesciunt at vitae temporibus?",
		title: "prueba",
		isComplete: false,
		priority: 3,
		creationDate: "2024-06-29T18:41:00.432Z",
	},
	{
		id: "abc4",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, at exercitationem. Minima quam corrupti vero eveniet ab obcaecati dicta recusandae. Odio quos est repellat mollitia, facere nesciunt at vitae temporibus? ",
		title: "prueba",
		isComplete: false,
		priority: 4,
		creationDate: "2024-05-29T18:41:00.432Z",
	},
	{
		id: "abc5",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, at exercitationem. Minima quam corrupti vero eveniet ab obcaecati dicta recusandae. Odio quos est repellat mollitia, facere nesciunt at vitae temporibus? ",
		title: "prueba",
		isComplete: true,
		priority: 5,
		creationDate: "2024-06-25T18:41:00.432Z",
	},
];

function App() {
	const todoState = useTodo(dummyData);
	const [isOrderByPriority, setIsOrderByPriority] = useState(true);
	const [filterBy, setFilterBy] = useState<"all" | "complete" | "incomplete">(
		"all",
	);

	function getFilteredAndSortedTodos() {
		let filteredTodos = todoState.value;

		if (filterBy === "complete") {
			filteredTodos = filteredTodos.filter((todo) => todo.isComplete);
		} else if (filterBy === "incomplete") {
			filteredTodos = filteredTodos.filter((todo) => !todo.isComplete);
		}

		if (isOrderByPriority) {
			filteredTodos.sort((a, b) => b.priority - a.priority);
		} else {
			filteredTodos.sort(
				(a, b) =>
					new Date(a.creationDate).getTime() -
					new Date(b.creationDate).getTime(),
			);
		}

		return filteredTodos;
	}

	return (
		<Container
			maxWidth="lg"
			sx={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<TopBar
				todoState={todoState}
				setFilterBy={setFilterBy}
				setIsOrderByPriority={setIsOrderByPriority}
			/>

			<ToDoContainer
				getFilteredAndSortedTodos={getFilteredAndSortedTodos()}
				todoState={todoState}
			/>
		</Container>
	);
}

export default App;
