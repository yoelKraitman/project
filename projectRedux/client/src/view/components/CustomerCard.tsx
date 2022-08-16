import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addFoodToCustomer } from '../../feature/customersSlice';
import { v4 as uuid } from "uuid";

interface CustomerType {
    food: string[]
    name: string,
    id: string
}

const CustomerCard = ({ food, name }: CustomerType) => {

    const dispatch = useDispatch()
    const id = uuid();
    const [foodCustomer, setFoodCustomer] = useState("");


    return (
        <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {/* but is in the class */}
                    {food.map((food) => {
                        return <p>{food}</p>
                    })}
                </div>
                <div className="customer-food-input-container">

                    <input value={foodCustomer} onChange={(e) => setFoodCustomer(e.target.value)} />
                    <button
                        onClick={() => {
                            if (!foodCustomer) return;
                            dispatch(
                                addFoodToCustomer(
                                    {
                                        id,
                                        food: foodCustomer
                                    }
                                ))
                                setFoodCustomer("");
                        }
                        }>Add
                    </button>
                </div>
            </div>
        </div >
    )
}

export default CustomerCard;