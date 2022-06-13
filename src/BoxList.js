import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm"
import { v4 as uuid } from "uuid";
import Box from "./Box"

function BoxList() {
    const [items, setBox] = useState([]);

    /** Add new item object to cart. */
    const addBox = item => {
        let newItem = { ...item, id: uuid() };
        setBox(items => [...items, newItem]);
    };

    const remove = id => {
        setBox(items => items.filter(box => box.id !== id))
    }

    const renderBoxes = items.map(box => (
        <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            handleRemove={remove}
            backgroundColor={box.backgroundColor}
        />
    ))

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {renderBoxes}
        </div>
    )
}

export default BoxList