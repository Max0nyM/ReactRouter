import { Container, Col, Row, Button, Table, Form } from 'react-bootstrap'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom'
import axios from 'axios'



function GetTheoryList() {
  let { path, url } = useRouteMatch()

  let [responseData, setResponseData] = React.useState('')
  // fetches data

  React.useEffect(() => {
    // Update the document title using the browser API
    axios
      .get('https://dev.sololearn.com/adminapi/api/theory')
      .then((response) => {
        setResponseData(response.data)
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <Container>
        <Row>
          <Col md={{ span: 2, offset: 10 }}>
            <Link to={`${path}/create`}>
              <Button variant="primary">Add New</Button>{' '}
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Content</th>
                  <th>Deleted</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {responseData &&
                  responseData.map((theory) => {
                    return <tr key={theory['id']}><td>{theory['id']}</td><td>{theory['title']}</td><td>{theory['content']}</td><td>{theory['deleted'].toString()}</td>
                    <td><Link to={`${path}/${theory["id"]}`}><Button variant="info">Edit</Button>{' '}</Link></td>
                    </tr>
                  })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GetTheoryList
