import { useState } from 'react'
import AllHotels from './components/AllHotels'
import HotelByTitle from './components/HotelByTitle'
import AddHotelForm from './components/AddHotelForm'


function App() {


  return (
    <>
      <AllHotels />

      <HotelByTitle title="Lake View" />

      <AddHotelForm />
    </>
  )
}

export default App
