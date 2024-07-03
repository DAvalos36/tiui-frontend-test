import {
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
import { ToDo } from "../types";

type Props = {
	showCreateModal: boolean;
	handleCreateModal: (v: boolean) => void;
	todoState: useTodoType;
};

function NewToDo({ showCreateModal, todoState, handleCreateModal }: Props) {
	function handleClose() {
		handleCreateModal(false);
	}

	return (
		<Dialog
			open={showCreateModal}
			PaperProps={{
				sx: { borderRadius: 5 },
				component: "form",
				onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
					event.preventDefault();
					const formData = new FormData(event.currentTarget);

					formData.append("id", crypto.randomUUID());
					formData.append(
						"creationDate",
						// ! This prevent error format on input date-time
						new Date()
							.toISOString()
							.replace("Z", ""),
					);

					const formJson = Object.fromEntries((formData as any).entries());

					formJson.isComplete = false;
					todoState.add(formJson as ToDo);

					handleClose();
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
				<Button onClick={handleClose}>Cancelar</Button>
				<Button type="submit">Guardar</Button>
			</DialogActions>
		</Dialog>
	);
}

export default NewToDo;
