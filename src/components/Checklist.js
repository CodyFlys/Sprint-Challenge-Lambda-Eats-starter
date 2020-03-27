import React from 'react';
import { useForm } from 'react-hook-form'

const Checklist = (props) => {

    return (
        <div>
        <br />
            <label htmlFor="Pepperoni">Pepperoni</label>
            <input type="checkbox" name="Toppings" value="Pepperoni" id="Pepperoni" className="topping-1" ref={props.notRequired}/>
            <br/>
            <label htmlFor="Pinapple">Pinapple</label>
            <input type="checkbox" name="Toppings" value="Pinapple" id="Pinapple" className="topping-2" ref={props.notRequired}/>
            <br/>
            <label htmlFor="Tomato">Tomato</label>
            <input type="checkbox" name="Toppings" value="Tomato" id="Tomato" className="topping-3" ref={props.notRequired}/>
            <br/>
            <label htmlFor="Jalapenos">Jalapenos</label>
            <input type="checkbox" name="Toppings" value="Jalapenos" id="Jalapenos" className="topping-4" ref={props.notRequired}/>
        <br />
        </div>
    )
}

export default Checklist