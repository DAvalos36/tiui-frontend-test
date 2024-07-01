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
	function onAction() {
		action();
		setShow(false);
	}

	return (
		<Dialog open={show} PaperProps={{ sx: { borderRadius: 5 } }}>
			<DialogTitle>Confirmar</DialogTitle>
			<DialogContent>
				<DialogContentText>{message}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => setShow(false)}>Cancelar</Button>
				<Button onClick={() => onAction()}>Confirmar</Button>
			</DialogActions>
		</Dialog>
	);
}

export default ConfirmationDialog;
