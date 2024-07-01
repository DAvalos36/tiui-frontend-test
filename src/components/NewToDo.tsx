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
	Typography,
} from "@mui/material";
import { useTodoType } from "../hooks/useTodo";

type Props = {
	showCreateModal: boolean;
	todoState: useTodoType;
};

function NewToDo({ showCreateModal, todoState }: Props) {
	return (
		<Dialog
			open={true}
			PaperProps={{
				component: "form",
				onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
					event.preventDefault();
					const formData = new FormData(event.currentTarget);

					formData.append("id", crypto.randomUUID());
					formData.append("creationDate", new Date().toISOString());

					formData.append("isComplete", "false");
					const formJson = Object.fromEntries((formData as any).entries());
					todoState.add(formJson);

					// handleClose();
				},
			}}
		>
			<DialogTitle>Crear nueva tarea "To Do"</DialogTitle>
			<DialogContent>
				<DialogContentText>Introduce la información</DialogContentText>
				<TextField
					autoFocus
					required
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
					margin="dense"
					id="content"
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
					aria-label="R"
					name="priority"
					defaultValue={1}
					valueLabelDisplay="auto"
					marks={[
						{ value: 1, label: "Poca" },
						{ value: 2 },
						{ value: 3, label: "Media" },
						{ value: 4 },
						{ value: 5, label: "Mucha" },
					]}
				/>
			</DialogContent>
			<DialogActions>
				<Button>Cancel</Button>
				<Button type="submit">Guardar</Button>
			</DialogActions>
		</Dialog>
	);
}

export default NewToDo;
