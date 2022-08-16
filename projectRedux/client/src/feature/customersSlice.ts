import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface AddFoodToCustomerType {
    food: string,
    id: string
}
interface Customer {
    food: string[],
    name: string,
    id: string
}
interface CustomerState {
    value: Customer[],
}
const initialState: CustomerState = {
    value: [] // initial
}

export const customersSlice = createSlice({
    name: "customer",// we can call how we want
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload)
        },
        addFoodToCustomer: (state, action: PayloadAction<AddFoodToCustomerType>) => {
            state.value.forEach((customer) =>{
                // we don't need return in forEach
                if(customer.id === action.payload.id){
                    customer.food.push(action.payload.food)
                }
            })
        }
    }
})

// export const {} = customerSlice.actions;
export const { addCustomer  , addFoodToCustomer } = customersSlice.actions;
// export default customerSlice.reducer; // we need to export the all slice
export default customersSlice.reducer;