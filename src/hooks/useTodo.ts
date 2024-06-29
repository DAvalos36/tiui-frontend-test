import { useState } from "react";
import { ToDo } from "../types";

export default function useTodo(initialValue: ToDo[]) {
	const [value, setValue] = useState<ToDo[]>(initialValue);
	const add = (newTodo: ToDo) => setValue((list) => [...list, newTodo]);
	const del = (todoId: string) =>
		setValue((list) => list.filter((item) => item.id !== todoId));
	const update = (id: string, newData: ToDo) =>
		setValue((list) => list.map((item) => (item.id === id ? newData : item)));
	return { value, add, del, update } as const;
}
