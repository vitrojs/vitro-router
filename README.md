It's just an adaptation of [voby-simple-router](https://github.com/fabiospampinato/voby-simple-router) and vitro


## Usage

```tsx
import { render } from 'vitro'
import { Route, Router, RouterRoute } from '@vitro/router'

const routes: RouterRoute[] = [
  {
    path: '/',
    to: () => <div> Home </div>
  },
   {
    path: '/about',
    to: () => <div> About </div>
  }
]

const Layout = () => {
  return <div>
    <nav>
      <ul class={ stack({p: '2', gap: '3' }) }>
          <Link to="/">Homepage</Link>
          <Link to="/user">User</Link>
          <Link to="/about">About</Link>
          <Link to="/foo" replace>Foo+Replace</Link>
          <Link to="/foo" state={{ custom: 123 }}>Foo+State</Link>
      </ul>
    </nav>
    <main>
      <Route />
    </main>
  </div>
}



const App = () => <Router routes={routes}> <Layout /> </Router>

render(<App />, document.getElementById('root'))
```