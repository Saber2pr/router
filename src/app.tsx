import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, Link, Redirect } from '.'

const Blog = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/blog/first">first</Link>
        </li>

        <li>
          <Link to="/blog/second">second</Link>
        </li>
      </ul>
    </nav>

    <Route default path="/blog/first" component={() => <div>first</div>} />
    <Route path="/blog/second" component={() => <div>second</div>} />
  </Router>
)

const App = (
  <Router>
    <header>head</header>

    <nav>
      <ul>
        <li>
          <Link to="/home">home</Link>
        </li>

        <li>
          <Link to="/blog">blog</Link>
        </li>

        <li>
          <Link to="/about">about</Link>
        </li>

        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
    </nav>

    <Route path="/" component={() => <div>Hello World!</div>} />

    <Route path="/home" component={() => <div>home</div>} />
    <Route path="/blog" component={() => <Blog />} />
    <Route path="/about" component={() => <div>about</div>} />

    <Redirect from="/home" to="/about" />

    <Route component={() => <h1>404 not Found</h1>} />

    <footer>footer</footer>
  </Router>
)

ReactDOM.render(App, document.querySelector('#root'))
