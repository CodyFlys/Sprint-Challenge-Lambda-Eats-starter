import React from 'react'
import Checklist from './Checklist'
import Dropdown from './Dropdown'
import RadioButton from './RadioButton'
import TextInput from './TextInput'
import { Link } from 'react-router-dom'
import Name from './name'

const Form = (props) => {

    return (

        <div>
            <Link to="/">
                <button>Home</button>
            </Link>

            <form onSubmit={props.handleSubmit(props.onSubmit)}>
                <Name nameLength={props.nameLength}/>
                <Checklist notRequired={props.notRequired}/>
                <Dropdown required={props.required}/>
                <RadioButton required={props.required}/>
                <TextInput notRequired={props.notRequired}/>

                  <button className="submit">MAKE A PIZZAAAAA</button>
            </form>

        </div>

    )
}

export default Form