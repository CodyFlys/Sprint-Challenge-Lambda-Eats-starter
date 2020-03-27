import React from 'react';
import { useForm } from 'react-hook-form'

const Name = (props) => {
    
    return (
        <div>
                <label htmlFor="name"></label>
                <input type="text" placeholder="Enter your name" name="name" className="input_name" id="name" ref={props.nameLength}/>
        </div>
    )
}

export default Name