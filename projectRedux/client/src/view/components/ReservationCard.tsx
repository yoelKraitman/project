import React from 'react'
import { useDispatch } from 'react-redux'
import { addCustomer } from '../../feature/customersSlice'
import { removeName } from '../../feature/reservationSlice'
import { v4 as uuid } from "uuid";
interface ReservationType {
    name: string,
    index: number
}
//I need to call the function "Re.. and send him a index"


const ReservationCard = ({ name, index }: ReservationType) => {
    
    const dispatch = useDispatch()
    const id = uuid()

    return (

        <div onClick={() => {
            // want to push this element to the customerSlice before we deleted

            dispatch(addCustomer({ food: [], name, id }))
            dispatch(removeName(index));
            
        }} className='reservation-card-container'>
            {name}
        </div>
    )
}

export default ReservationCard