import { LinearProgress, Slider, Typography } from "@mui/material";
import { ToDo } from "../types";

import Box from "@mui/material/Box";

// TODO: Otros colores de fondo a utilizar: #F8DFC8, #C8EAF8, #C8F8CD

export default function TodoCard(data: ToDo) {
	const priorityPercent = (data.priority * 100) / 5;
	// const priorityColor =

	return (
		<Box
			display="flex"
			flexDirection="column"
			borderRadius={5}
			padding={2}
			gap={2}
			maxWidth={300}
			sx={{
				backgroundColor: "#F8EDC8",
			}}
		>
			<Box display="flex" justifyContent="end">
				IDK{/* TODO: Iconos Aqui  */}
			</Box>
			<Typography variant="h4">{data.title}</Typography>
			<Typography>{data.content}</Typography>
			<LinearProgress
				color="secondary"
				variant="determinate"
				value={priorityPercent}
			/>
			<LinearProgress
				color="warning"
				variant="determinate"
				value={priorityPercent}
			/>
			<LinearProgress color="error" variant="determinate" value={100} />
		</Box>
	);
}
