import React from 'react';
import { useForm } from 'react-hook-form'

const TextInput = (props) => {
    
    return (
        <div>
                <label htmlFor="instructions">Special Instructions</label>
                <input type="text" placeholder="Special Instructions" name="textbox" id="instructions" ref={props.notRequired}/>
        </div>
    )
}

export default TextInput