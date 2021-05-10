import { Container, Col, Row, Button, Table, Form } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom'
import { useForm } from "react-hook-form";
import React from 'react'
import axios from 'axios'

export default function EditTheory() {

  let { path, url } = useRouteMatch()
  let { id } = useParams();
  console.log(id);
  
  let [responseData, setResponseData] = React.useState('')
  const { register, handleSubmit, reset, formState } = useForm('');
  const { errors } = formState;
  // fetches data

  function onSubmit(data) {
    // display form data on success
    axios
    .put(`https://dev.sololearn.com/adminapi/api/theory/${id}`,data)
    .then((response) => {
      setResponseData(response.data)
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
   
    return false;
}

  return (
    <div className="card m-3">
    <h5 className="card-header">Edit Theory</h5>
    <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group form-text">
                <input name="title" type="text" {...register('title')} id="title" />
                <label htmlFor="title" className="form-title-label">Title</label>
                <div className="invalid-feedback">{errors.title?.message}</div>
            </div>
            <div className="form-group form-text">
                <input name="content" type="text" {...register('content')} id="content" />
                <label htmlFor="content" className="form-title-label">Content</label>
                <div className="invalid-feedback">{errors.content?.message}</div>
            </div>
            <div className="form-group form-check">
                <input name="deleted" type="checkbox" {...register('deleted')} id="deleted" />
                <label htmlFor="deleted" className="form-check-label">Deleted</label>
                <div className="invalid-feedback">{errors.deleted?.message}</div>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary mr-1">Edit</button>
                <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button>
            </div>
            <input name="id" type="text" hidden {...register('id')} id="id" value={Number(id)} />
        </form>
    </div>
</div>
  )
}
