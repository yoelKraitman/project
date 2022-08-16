import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ReservationCard from './view/components/ReservationCard'
import CustomerCard from "./view/components/CustomerCard";

import { RootState } from "./app/store";
import { addName } from "./feature/reservationSlice";

import "./App.css";

function App() {

  const handleAddName = () => {
    if (!reservationName) return;
    dispatch(addName(reservationName))
  }
  const dispatch = useDispatch();
  const [reservationName, setReservationName] = useState('')

  const customers = useSelector((state: RootState) => state.customer.value)
  const reservations = useSelector((state: RootState) => state.reservation.value)
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard name={name} index={index} />
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationName} onChange={(e) => {
              setReservationName(e.target.value)
            }} />
            <button onClick={handleAddName}>Add</button>
            {/* onclick I want with dispatch to puch the value from the input to the store/reservation */}
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => {
            return <CustomerCard food={customer.food} name={customer.name} id={customer.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default App;