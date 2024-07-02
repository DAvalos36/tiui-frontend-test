import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Slider,
	TextField,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from "@mui/material";
import { useTodoType } from "../hooks/useTodo";
import { useState } from "react";
import { ToDo } from "../types";

type Props = {
	todoInfo: ToDo;
	todoState: useTodoType;
	showEdit: boolean;
	setShowEdit: (v: boolean) => void;
};

function UpdateTodo({ todoInfo, todoState, showEdit, setShowEdit }: Props) {
	const [isComplete, setIsComplete] = useState(todoInfo.isComplete);

	return (
		<Dialog
			open={showEdit}
			PaperProps={{
				sx: { borderRadius: 5 },
				component: "form",
				onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
					event.preventDefault();
					const formData = new FormData(event.currentTarget);

					formData.append("id", todoInfo.id);

					//

					// biome-ignore lint/suspicious/noExplicitAny: <explanation>
					const formJson = Object.fromEntries((formData as any).entries());

					todoState.update(todoInfo.id, formJson as ToDo);

					setShowEdit(false);
				},
			}}
		>
			<DialogTitle>Crear nueva tarea "To Do"</DialogTitle>
			<DialogContent>
				<DialogContentText>Introduce la información</DialogContentText>
				<TextField
					autoFocus
					required
					defaultValue={todoInfo?.title}
					margin="dense"
					id="title"
					name="title"
					label="Titulo"
					type="text"
					fullWidth
					variant="standard"
				/>
				<TextField
					required
					rows={4}
					defaultValue={todoInfo?.content}
					margin="dense"
					multiline
					name="content"
					label="Contenido"
					type="text"
					fullWidth
					variant="standard"
				/>
				<Typography variant="overline">Prioridad</Typography>
				<Slider
					min={1}
					max={5}
					name="priority"
					defaultValue={todoInfo?.priority}
					valueLabelDisplay="auto"
					marks={[
						{ value: 1, label: "Poca" },
						{ value: 2 },
						{ value: 3, label: "Media" },
						{ value: 4 },
						{ value: 5, label: "Mucha" },
					]}
				/>
				<Box
					display={"flex"}
					flexWrap="wrap"
					alignItems="center"
					justifyContent="space-between"
				>
					<TextField
						margin="dense"
						label="Fecha de creacion"
						name="creationDate"
						defaultValue={todoInfo?.creationDate}
						variant="standard"
						type="datetime-local"
					/>
					<ToggleButtonGroup
						value={isComplete}
						exclusive
						onChange={(_, v) => setIsComplete(v)}
						aria-label="text alignment"
					>
						<ToggleButton
							value={true}
							color="primary"
							aria-label="left aligned"
							sx={{ borderRadius: 3 }}
						>
							Terminada
						</ToggleButton>
						<ToggleButton
							color="primary"
							value={false}
							aria-label="centered"
							sx={{ borderRadius: 3 }}
						>
							Sin Terminar
						</ToggleButton>
					</ToggleButtonGroup>
				</Box>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => setShowEdit(false)}>Cancelar</Button>
				<Button type="submit">Guardar</Button>
			</DialogActions>
		</Dialog>
	);
}

export default UpdateTodo;
