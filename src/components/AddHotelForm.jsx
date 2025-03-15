import {useState} from 'react'
const API_URL = import.meta.env.VITE_API_URL

const AddHotelForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        location: "",
        rating: "",
        website: "",
        phoneNumber: "",
        checkInTime: "",
        checkOutTime: "",
        amenities: "",
        priceRange: "",
        reservationsNeeded: null,
        isParkingAvailable: null,
        isWifiAvailable: null,
        isPoolAvailable: null,
        isSpaAvailable: null,
        isRestaurantAvailable: null,
        photos: []
    })



    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prevState => ({
            ...prevState,
            [name] : name === "rating" ? parseInt(value) : value
        }))
    }

    const handleCheckbox = (e) => {
        const {checked, id} = e.target
        if (checked) {
            setFormData(prevState => ({
                ...prevState,
                [id] : true
            }))
        } else {
            setFormData(prevState => ({
                ...prevState,
                [id] : false
            }))
        }
    }

    const handlePhotos = (e) => {
        const {name, value} = e.target
        const photoArray = value.split(", ")
        setFormData(prevState => ({
            ...prevState,
            [name] : [...photoArray]
        }))
    }

    const formHandler = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${API_URL}/hotels`, {
                method : "POST",
                headers: {"Content-type" : "application/json"},
                body: JSON.stringify(formData)
            })

            if(!response.ok) {
                throw "Failed to add data."
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    
    return (
        <>
            <h2>Add a Hotel</h2>
            <form onSubmit={formHandler}>
                <label htmlFor="name">Name</label> <br/>
                <input onChange={handleChange} type="text" name="name" /> <br /> <br />

                <label htmlFor="category">Category</label> <br/>
                <select onChange={handleChange} name="category">
                    <option value="">-- Select --</option>
                    <option value="Budget">Budget</option>
                    <option value="Mid-Range">Mid-Range</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Boutique">Boutique</option>
                    <option value="Resort">Resort</option>
                    <option value="Other">Other</option>
                </select> <br/> <br/>

                <label htmlFor="location">Location</label> <br/>
                <input onChange={handleChange} type="text" name="location" /> <br /> <br />

                <label htmlFor="rating">Rating</label> <br/>
                <input onChange={handleChange} type="text" name="rating" placeholder="Rating between 0 and 5"/> <br /> <br />

                <label htmlFor="website">Website</label> <br/>
                <input onChange={handleChange} type="text" name="website" /> <br /> <br />

                <label htmlFor="phoneNumber">Phone Number</label> <br/>
                <input onChange={handleChange} type="text" name="phoneNumber" /> <br /> <br />

                <label htmlFor="checkInTime">Check In Time</label> <br/>
                <input onChange={handleChange} type="text" name="checkInTime" /> <br /> <br />

                <label htmlFor="checkOutTime">Check Out Time</label> <br/>
                <input onChange={handleChange} type="text" name="checkOutTime" /> <br /> <br />

                <label htmlFor="amenities">Amenities</label> <br/>
                <input onChange={handleChange} type="text" name="amenities" /> <br /> <br />

                <label htmlFor="priceRange">Price Range</label> <br/>
                <select onChange={handleChange} name="priceRange">
                    <option value="$$(11-30)">$$(11-30)</option>
                    <option value="$$$(31-60)">$$$(31-60)</option>
                    <option value="$$$$(61+)">$$$$(61+)</option>
                    <option value="Other">Other</option>
                </select> <br/> <br/>

                <label>
                    <input onChange={handleCheckbox} type="checkbox" id="reservationsNeeded" /> Reservations Needed
                </label> <br/>

                <label>
                    <input onChange={handleCheckbox} type="checkbox" id="isParkingAvailable" /> Is Parking Available
                </label> <br/>
                
                <label>
                    <input onChange={handleCheckbox} type="checkbox" id="isWifiAvailable" /> Is Wifi Available
                </label> <br/>

                <label>
                    <input onChange={handleCheckbox} type="checkbox" id="isPoolAvailable" /> Is Pool Available
                </label> <br/>

                <label>
                    <input onChange={handleCheckbox} type="checkbox" id="isSpaAvailable" /> Is Spa Available
                </label> <br/>

                <label>
                    <input onChange={handleCheckbox} type="checkbox" id="isRestaurantAvailable" /> Is Restaurant Available
                </label> <br/> <br />

                <label htmlFor="photos">Photos</label> <br/>
                <input onChange={handlePhotos} type="text" name="photos" /> <br /> <br />

                <input type="submit" />
            </form>
        
        </>

    )
}

export default AddHotelForm