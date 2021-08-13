import { createSlice, nanoid } from "@reduxjs/toolkit";

const createHuman = name => ({
    id:nanoid(),
    name,
    tasksIds: []
})

const initialState = [
    createHuman('Joe'),
    createHuman('Black'),
    createHuman('Alice'),
    createHuman('Rance'),
];

export const humansSlice = createSlice({
    name:'humans',
    initialState,
    add:(state,action)=>{
        state.push(createHuman(action.payload))
    }
})