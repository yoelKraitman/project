import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface reservationState{
    value : string[],
}

const initialState:reservationState= {
    value : [] // initial
}

export const reservationsSlice = createSlice({
    name:"reservation" ,// we can call how we want
    initialState,
    reducers:{
        addName:(state , action:PayloadAction<string>) =>{
            state.value.push(action.payload)
        },
        removeName:(state , action:PayloadAction<number>)=>{
            // we can remove it in two way 
            //1_ by _id 2_ by the index we can pass in the map() and after that remove it by splice() and that we gonna do 
            state.value.splice(action.payload , 1)
        }
    } 
})
export const {addName , removeName} = reservationsSlice.actions;
export default reservationsSlice.reducer; // we need to export the all slice