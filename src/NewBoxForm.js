import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = { width: "", height: "", color: "" }
    const [formData, setFormData] = useState(INITIAL_STATE)

    // Send data to parent and clear form
    const handleSubmit = evt => {
        evt.preventDefault()
        addBox(formData)
        setFormData(INITIAL_STATE)
    }

    // Update local state

    const handleChange = evt => {
        const { name, value } = evt.target
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }

    // Render form

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">width:</label>
            <input
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor="height">height:</label>
            <input
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />
            <label htmlFor="color">color:</label>
            <input
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
            />

            <button>Add a new box!</button>
        </form>
    )

}


export default NewBoxForm