import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import {
  Route,
  Router,
  Link,
  Redirect,
  hashHistory,
  browserHistory,
  usePush
} from '.'

const Test = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/blog/third/1">1</Link>
        </li>

        <li>
          <Link to="/blog/third/2">2</Link>
        </li>
        <li>
          <Link to="/blog/third/3">3</Link>
        </li>
      </ul>
    </nav>
    <Router cache basename="/blog/third/">
      <Route path="1" component={() => <div>1</div>} />
      <Route default path="2" component={() => <div>2</div>} />
      <Route path="3" component={() => <div>3</div>} />
    </Router>
  </>
)

const Blog = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/blog/first">first</Link>
          </li>

          <li>
            <Link to="/blog/second">second</Link>
          </li>
          <li>
            <Link to="/blog/third">third</Link>
          </li>
        </ul>
      </nav>
      <Router cache basename="/blog/">
        <Route path="first" component={() => <div>first</div>} />
        <Route path="second" component={() => <div>second</div>} />
        <Route
          path="third"
          component={() => (
            <div>
              third
              <div>
                <Test />
              </div>
            </div>
          )}
        />
      </Router>
    </>
  )
}

const App = (
  <>
    <header>head</header>

    <Router history={hashHistory}>
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
            <Link href="/login">login</Link>
          </li>
          <li>
            <Link onClick={() => console.log('to')}>test none `to`</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" component={() => <div>Hello World!</div>} />

      <Route path="/home" component={() => <div>home</div>} />
      <Route path="/blog" component={() => <Blog />} />
      <Route path="/about" component={() => <div>about</div>} />

      {/* <Redirect from="/home" to="/about" /> */}

      {/* <Route component={() => <h1>404 not Found</h1>} /> */}
    </Router>
    <footer>footer</footer>
  </>
)

ReactDOM.render(App, document.querySelector('#root'))
