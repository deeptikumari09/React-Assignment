import {configureStore} from '@reduxjs/toolkit'

import BudgetReducer from './BudgetList'

export const store = configureStore({
    reducer : {
        BudgetList : BudgetReducer
    }
})