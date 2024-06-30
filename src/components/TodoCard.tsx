import { LinearProgress, Typography } from "@mui/material";
import { ToDo } from "../types";

import Box from "@mui/material/Box";
import CheckIcon from "../icons/Check";
import InProcessIcon from "../icons/Process";

//* Modify interface to add render's order and manage colors
interface ToDoTypeModify extends ToDo {
	order: number;
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

	return (
		<Box
			display="flex"
			flexDirection="column"
			borderRadius={5}
			padding={2}
			gap={2}
			sx={{
				backgroundColor: data.isComplete ? "#EEEEEE" : bgColors[data.order % 4],
			}}
		>
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Typography variant="overline">
					{new Date(data.creationDate).toLocaleDateString("es-ES", dateFormat)}
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
		</Box>
	);
}
