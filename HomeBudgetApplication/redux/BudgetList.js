import {createSlice} from '@reduxjs/toolkit'

const budgetSlice = createSlice({
    name : 'budgetEntryList',
    initialState : {
        items : []
    },
    reducers : {
        addItem : (state,action)=>{
            state.items.push(action.payload.item)
        }
    }
})

export const addItem = budgetSlice.actions.addItem;
export default budgetSlice.reducer;