import { useState } from "react"
import useFetch from "./useFetch"

const API_URL = import.meta.env.VITE_API_URL

const AllHotels = () => {
    const {data, loading, error} = useFetch(API_URL)

    const [successMsg, setMsg] = useState("")

    const deleteHotel = async (hotelId) => {
        try {
            const response = await fetch(`${API_URL}/${hotelId}`, {
                method: "DELETE",
            })

            if(!response.ok) {
                throw "Failed to delete movie"
            }

            const data = response.json()
            if(data) {
                setMsg("Hotel deleted successfully!")
                window.location.reload()
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>All Hotels</h2>
          {data? (
            <ul>
                {data.map(hotel => (
                    <li key={hotel._id}>
                        {hotel.name}
                        <button onClick={() => deleteHotel(hotel._id)}>Delete</button>
                    </li>
                ))}
            </ul>
          ) : (loading && <p>Loading...</p>)} 
          <p>{successMsg}</p> 
        </>
    )
}

export default AllHotels