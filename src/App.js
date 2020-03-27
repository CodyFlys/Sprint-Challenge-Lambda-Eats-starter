import React, { useState, useEffect} from 'react';
import Home from './components/Home'
import Form from './components/pizza'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const App = () => {

  const {register, handleSubmit} = useForm()
  const [formState, setFormState] = useState({})
  const [post, setPost] = useState([])

  const onSubmit = data => {

    axios
      .post("https://reqres.in/api/users", data)
      .then(res => {
        setPost(res.data);

        setFormState(
          data
        );

      })
      .catch(err => {
        console.log(err.res);
      });
  }

  useEffect(() => {
    console.log("POSTED DATA", post)
  }, [post])

  return (
    <div>

      <Route exact path ="/">
        <Home />
      </Route>

      <Route exact path="/pizza">
        <Form 
        onSubmit={onSubmit}
        nameLength={register({required: true, minLength: 2})}
        handleSubmit={handleSubmit}
        required={register({required: true})}
        notRequired={register({required: false})}
        />
      </Route>

    </div>
  );
};
export default App;