import { Container, Col, Row, Button, Table, Form } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom'

import CreateLectures from './CreateLectures'

function GetLectures() {
  let { path, url } = useRouteMatch()

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
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GetLectures
