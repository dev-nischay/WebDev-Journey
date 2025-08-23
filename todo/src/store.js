import { create } from "zustand";
import {v4 as uuidv4} from "uuid";


export const useStore = create((set,get) => ({
  todo: [],
  show:"all",
  addTodo: (title) => set((state) => ({ todo: [...state.todo, {
    title,
    isDone:false,
    id:uuidv4()
  }] })),
  delTodo: (id) =>
    set((state) => ({
      todo: state.todo.filter((e) => e.id !== id),
    })),
  clearTodo: () => set({ todo: [] }),


 updateTodo: (id) => set((state) => ({
    todo:state.todo.map((e) => 
        e.id===id ? {...e,isDone:!e.isDone} : e)

  })),
  toggle:(name) => set({show:name})

}));

export const { addTodo, delTodo, clearTodo,completedTodo,toggle,updateTodo } = useStore.getState();

