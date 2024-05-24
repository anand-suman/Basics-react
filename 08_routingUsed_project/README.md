# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


React Routing, facilitated by libraries such as React Router, allows you to build a single-page application (SPA) with navigation capabilities. This means users can navigate between different views or pages within the application without needing to refresh the entire page. React Router is the most commonly used routing library for React applications, providing a powerful and flexible way to handle routing.

### Key Concepts of React Router

1. **Router Components**:
   - **BrowserRouter**: Uses the HTML5 history API to keep your UI in sync with the URL. Ideal for web applications.
   - **HashRouter**: Uses the hash portion of the URL (e.g., `example.com/#/about`) to keep the UI in sync. Useful for older browsers or static file hosting.
   - **MemoryRouter**: Keeps the history of your "URL" in memory (does not read or write to the address bar). Useful for testing or non-browser environments.

2. **Route**:
   - The `Route` component renders UI based on the URL path. It matches the path specified in the `path` prop with the current URL.
   ```jsx
   <Route path="/about" component={AboutPage} />
   ```
   - You can also use `render` or `children` props to define what should be rendered.

3. **Switch**:
   - The `Switch` component is used to group `Route` components. It renders the first `Route` that matches the current URL.
   ```jsx
   <Switch>
     <Route path="/about" component={AboutPage} />
     <Route path="/contact" component={ContactPage} />
     <Route component={NotFoundPage} /> {/* Fallback route */}
   </Switch>
   ```

4. **Link**:
   - The `Link` component is used to navigate between routes. It prevents full page reloads and updates the URL, triggering the corresponding `Route`.
   ```jsx
   <Link to="/about">About</Link>
   ```

5. **NavLink**:
   - Similar to `Link`, but it allows you to apply styles to the link when it is active.
   ```jsx
   <NavLink to="/about" activeClassName="active">About</NavLink>
   ```

6. **useHistory, useLocation, useParams, useRouteMatch**:
   - These are React hooks provided by React Router to access and manipulate the routing state.

### Setting Up React Router

1. **Installation**:
   To start using React Router, you need to install it using npm or yarn.
   ```bash
   npm install react-router-dom
   ```

2. **Basic Usage**:
   - Wrap your application with `BrowserRouter`.
   - Define routes using `Route` and wrap them with `Switch`.
   - Use `Link` or `NavLink` to navigate between routes.

   ```jsx
   import React from 'react';
   import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

   const Home = () => <h2>Home</h2>;
   const About = () => <h2>About</h2>;
   const Contact = () => <h2>Contact</h2>;

   function App() {
     return (
       <Router>
         <div>
           <nav>
             <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
             </ul>
           </nav>

           <Switch>
             <Route path="/about" component={About} />
             <Route path="/contact" component={Contact} />
             <Route path="/" component={Home} />
           </Switch>
         </div>
       </Router>
     );
   }

   export default App;
   ```

### Advanced Features

1. **Nested Routes**:
   - React Router supports nested routes. This allows you to render child components inside parent components based on the URL.
   ```jsx
   const Topic = ({ match }) => <h3>{match.params.topicId}</h3>;

   const Topics = ({ match }) => (
     <div>
       <h2>Topics</h2>
       <ul>
         <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
         <li><Link to={`${match.url}/components`}>Components</Link></li>
         <li><Link to={`${match.url}/props-v-state`}>Props v. State</Link></li>
       </ul>

       <Switch>
         <Route path={`${match.path}/:topicId`} component={Topic} />
         <Route path={match.path} render={() => <h3>Please select a topic.</h3>} />
       </Switch>
     </div>
   );

   function App() {
     return (
       <Router>
         <div>
           <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/topics">Topics</Link></li>
           </ul>

           <Switch>
             <Route path="/topics" component={Topics} />
             <Route path="/" component={Home} />
           </Switch>
         </div>
       </Router>
     );
   }
   ```

2. **Redirects**:
   - The `Redirect` component is used to navigate programmatically.
   ```jsx
   import { Redirect } from 'react-router-dom';
   <Redirect to="/new-path" />
   ```

3. **Programmatic Navigation**:
   - You can use the `useHistory` hook to navigate programmatically.
   ```jsx
   import { useHistory } from 'react-router-dom';

   function MyComponent() {
     let history = useHistory();

     function handleClick() {
       history.push('/new-path');
     }

     return (
       <button onClick={handleClick}>
         Go to new path
       </button>
     );
   }
   ```

4. **Custom Route Matching**:
   - Use `useRouteMatch` for advanced matching within components.
   ```jsx
   import { useRouteMatch } from 'react-router-dom';

   function MyComponent() {
     let match = useRouteMatch('/path/:id');
     return match ? <div>Matched!</div> : <div>No Match</div>;
   }
   ```

### Conclusion

React Router provides a robust way to handle client-side routing in React applications. It allows you to create dynamic, responsive applications with smooth navigation and deep linking capabilities. By understanding and utilizing the core components and features of React Router, you can build sophisticated single-page applications that provide a seamless user experience.