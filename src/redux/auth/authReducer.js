import { createSlice } from "@reduxjs/toolkit";
const initialState={
    name:"",
}
const NameSlice=createSlice({
    name:"Name",
    initialState,
    reducers:{
        SET_NAME:(state, action)=>{
            state.name=action.payload;
        }
    }
})


export default NameSlice.reducer;