import {delTodo,useStore,updateTodo} from "../store"
import { shallow } from "zustand/shallow";

export default ({id}) => {

    let obj = useStore((state) => state.todo.find((e) => e.id===id),shallow)

    return <>
    <div>
        <div>{obj.title} <button onClick={() =>delTodo(id)}>del</button> <button onClick={() => updateTodo(id)}>Mark</button> </div> 
       

    </div>    
    </>
}