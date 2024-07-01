import { useState } from "react";
import { ToDo } from "../types";

export default function useTodo(initialValue: ToDo[]): useTodoType {
	const [value, setValue] = useState<ToDo[]>(initialValue);
	const add = (newTodo: ToDo) => setValue((list) => [...list, newTodo]);
	const del = (todoId: string) =>
		setValue((list) => list.filter((item) => item.id !== todoId));
	const update = (id: string, newData: ToDo) =>
		setValue((list) => list.map((item) => (item.id === id ? newData : item)));

	const setComplete = (id: string) =>
		setValue((list) =>
			list.map((item) => {
				if (item.id === id) {
					const updateItem = item;
					updateItem.isComplete = true;
					return updateItem;
				}
				return item;
			}),
		);
	return { value, add, del, update, setValue, setComplete } as const;
}

export interface useTodoType {
	value: ToDo[];
	add: (newTodo: ToDo) => void;
	del: (todoId: string) => void;
	update: (id: string, newData: ToDo) => void;
	setComplete: (id: string) => void;
	setValue: (list: ToDo[]) => void;
}
