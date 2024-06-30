import { Button, LinearProgress, Typography } from "@mui/material";
import { ToDo } from "../types";

import Box from "@mui/material/Box";
import CheckIcon from "../icons/Check";
import InProcessIcon from "../icons/Process";
import { useTodoType } from "../hooks/useTodo";
import ConfirmationDialog from "./ConfirmationDialog";
import { useState } from "react";

//* Modify interface to add render's order and manage colors
//* And all todo state
interface ToDoTypeModify extends ToDo {
	order: number;
	todoState: useTodoType;
}

const bgColors = ["#F8DFC8", "#C8EAF8", "#C8F8CD", "#F8EDC8"];

const dateFormat: Intl.DateTimeFormatOptions = {
	year: "numeric",
	month: "long",
	day: "2-digit",
};

/**
 * This function recives the number value as priority and return the respective color
 * @param priority Priority value. 1 - 5
 */
function getPriorityColor(priority: number) {
	if (priority <= 2) {
		return "secondary";
	}
	if (priority > 3) {
		return "error";
	}
	return "warning";
}

export default function TodoCard(data: ToDoTypeModify) {
	const priorityPercent = (data.priority * 100) / 5;

	// This states manage if show action dialog of delete o set complete task
	const [showDelete, setShowDelete] = useState(false);
	const [showComplete, setShowComplete] = useState(false);

	return (
		<>
			<ConfirmationDialog
				message={`¿Seguro que desea eliminar la tarea ${data.title}?`}
				show={showDelete}
				setShow={setShowDelete}
				action={() => data.todoState.del(data.id)}
			/>
			<ConfirmationDialog
				message={`¿Seguro que desea dar la tarea ${data.title} por terminada?`}
				show={showComplete}
				setShow={setShowComplete}
				action={() => data.todoState.del(data.id)}
			/>

			<Box
				display="flex"
				flexDirection="column"
				borderRadius={5}
				padding={2}
				gap={2}
				sx={{
					backgroundColor: data.isComplete
						? "#EEEEEE"
						: bgColors[data.order % 4],
				}}
			>
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<Typography variant="overline">
						{new Date(data.creationDate).toLocaleDateString(
							"es-ES",
							dateFormat,
						)}
					</Typography>
					{data.isComplete ? (
						<CheckIcon size="2em" />
					) : (
						<InProcessIcon size="2em" />
					)}
				</Box>
				<Typography variant="h4">{data.title}</Typography>
				<Typography>{data.content}</Typography>
				<LinearProgress
					color={getPriorityColor(data.priority)}
					variant="determinate"
					value={priorityPercent}
				/>
				<Button onClick={() => setShowDelete(true)}>Eliminar</Button>
			</Box>
		</>
	);
}
