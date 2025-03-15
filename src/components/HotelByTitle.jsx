import useFetch from "./useFetch"

const API_URL = import.meta.env.VITE_API_URL

const HotelByTitle = ({title}) => {
    const {data, loading, error} = useFetch(`${API_URL}/${title}`)

    return (
        <>
            {data? (
                <div>
                    <h2>{data.name}</h2>
                    <p><strong>Location:</strong> {data.location}</p>                    
                    <p><strong>Rating: </strong>{data.rating}</p>
                    <p><strong>Price Range: </strong>{data.priceRange}</p>
                </div>
            ) : (loading && <p>Loading...</p>)}
        </>
    )
}

export default HotelByTitle