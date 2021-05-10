import { Navbar, Nav } from 'react-bootstrap'
import Lectures from './GetLectures'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom'
import GetLectures from './GetLectures'
import CreateLectures from './CreateLectures'

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/lectures">Lectures</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/lectures">
            <GetLectures />
          </Route>
          <Route exact path="/lectures/create">
            <CreateLectures />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
