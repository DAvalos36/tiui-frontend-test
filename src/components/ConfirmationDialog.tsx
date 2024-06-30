import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";

type Props = {
	show: boolean;
	setShow: (v: boolean) => void;
	message: string;

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	action: (...args: any[]) => void;
};

function ConfirmationDialog({ message, setShow, show, action }: Props) {
	return (
		<Dialog open={show}>
			<DialogTitle>Confirmar</DialogTitle>
			<DialogContent>
				<DialogContentText>{message}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => setShow(false)}>Cancelar</Button>
				<Button onClick={action}>Confirmar</Button>
			</DialogActions>
		</Dialog>
	);
}

export default ConfirmationDialog;
