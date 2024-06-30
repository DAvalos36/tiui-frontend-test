import { Box, Button, MenuItem } from "@mui/material";

type Props = {
	setIsOrderByPriority: (v: boolean) => void;
	setFilterBy: (v: "all" | "complete" | "incomplete") => void;
};

function TopBar({ setFilterBy, setIsOrderByPriority }: Props) {
	return (
		<Box
			display="flex"
			justifyContent="space-between"
			borderRadius={5}
			sx={{
				backgroundColor: "#F9F9F9",
				padding: 2,
				border: 1,
				borderColor: "grey.300",
			}}
		>
			<Button onClick={() => setIsOrderByPriority(true)}>A</Button>
			<MenuItem value={20} onClick={() => setFilterBy("all")}>
				Todas
			</MenuItem>
			<MenuItem value={21} onClick={() => setFilterBy("complete")}>
				Completas
			</MenuItem>
			<MenuItem value={22} onClick={() => setFilterBy("incomplete")}>
				Incompletas
			</MenuItem>
		</Box>
	);
}

export default TopBar;
