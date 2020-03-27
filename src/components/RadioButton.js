import React from 'react';
import { useForm } from 'react-hook-form'

const RadioButton = (props) => {
    return (
        <div>
        <br />
            <label htmlFor="Original Red">Original Red</label>
            <input type="radio" name="sauce" value="Original Red" id="Original Red" ref={props.required}/>
            <br />
            <label htmlFor="BBQ Sauce">BBQ Sauce</label>
            <input type="radio" name="sauce" value="BBQ Sauce" id="BBQ Sauce" ref={props.required}/>
            <br />
            <label htmlFor="Garlic Ranch">Garlic Ranch</label>
            <input type="radio" name="sauce" value="Garlic Ranch" id="Garlic Ranch" ref={props.required}/>
        
        <br />
        </div>
    )
}

export default RadioButton