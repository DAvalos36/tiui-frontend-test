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
	setShow: (v: string) => void;
	message: string;

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	action: (...args: any[]) => void;
};

function ConfirmationDialog({ message, setShow, show }: Props) {
	return (
		<Dialog open={show}>
			<DialogTitle>Confirmar</DialogTitle>
			<DialogContent>
				<DialogContentText>{message}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => setShow("")}>Cancel</Button>
				<Button type="submit">Confirmar</Button>
			</DialogActions>
		</Dialog>
	);
}

export default ConfirmationDialog;
