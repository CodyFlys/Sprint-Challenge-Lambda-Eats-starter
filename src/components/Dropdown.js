import React from 'react';
import { useForm } from 'react-hook-form'

const Dropdown = (props) => {

    return (
        <div>
            <select name="Size" type="select" ref={props.notRequired}>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
            </select>
        </div>
    )
}

export default Dropdown