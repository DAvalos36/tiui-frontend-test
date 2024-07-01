import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Container } from "@mui/material";

import useTodo from "./hooks/useTodo";
import { useEffect, useState } from "react";
import ToDoContainer from "./components/ToDoContainer";
import TopBar from "./components/TopBar";
import { ToDo } from "./types";

function App() {
	//* load todoData from localStorage on app on init
	const todoState = useTodo(
		JSON.parse(localStorage.getItem("todoInfo") ?? "[]") as unknown as ToDo[],
	);
	const [isOrderByPriority, setIsOrderByPriority] = useState(true);
	const [filterBy, setFilterBy] = useState<"all" | "complete" | "incomplete">(
		"all",
	);

	// * This useEffect stores in local storage every change in todoData
	useEffect(() => {
		localStorage.setItem("todoInfo", JSON.stringify(todoState.value));
	}, [todoState.value]);

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
