import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name:"blog",
    initialState:{
        blogData:null
    },
    reducers:{
        setBlogData:(state,action)=>{
            state.blogData = action.payload
        }
    }
})

export const {setBlogData} = blogSlice.actions;
export default blogSlice.reducer;