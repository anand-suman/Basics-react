# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

The Context API in React is a powerful feature that allows you to share state and other data across your component tree without having to pass props down manually at every level. This can be particularly useful for managing global state or passing data to deeply nested components.

### Key Concepts of React Context API

1. **Context**:
   - Context provides a way to pass data through the component tree without having to pass props down manually at every level.
   - Context is designed to share data that can be considered "global" for a tree of React components, such as the current authenticated user, theme, or preferred language.

2. **Creating Context**:
   - You create a context using `React.createContext`. This method returns an object with a `Provider` and a `Consumer`.
   ```jsx
   const MyContext = React.createContext(defaultValue);
   ```

3. **Provider**:
   - The `Provider` component makes the context available to all nested components.
   - The `value` prop on the `Provider` is used to pass the current context value to the tree below.
   ```jsx
   <MyContext.Provider value={someValue}>
     {/* components */}
   </MyContext.Provider>
   ```

4. **Consumer**:
   - The `Consumer` component allows components to subscribe to context changes.
   - It uses a render prop to access the context value.
   ```jsx
   <MyContext.Consumer>
     {value => /* render something based on the context value */}
   </MyContext.Consumer>
   ```

5. **useContext Hook**:
   - The `useContext` hook is a simpler way to subscribe to context within a function component.
   ```jsx
   const value = useContext(MyContext);
   ```

### Using Context API

Here’s a detailed example to demonstrate how to use the Context API in a React application:

1. **Create a Context**:
   ```jsx
   import React from 'react';

   const ThemeContext = React.createContext('light');
   ```

2. **Provide Context**:
   - Wrap your component tree with the `Provider` and pass the context value.
   ```jsx
   function App() {
     return (
       <ThemeContext.Provider value="dark">
         <Toolbar />
       </ThemeContext.Provider>
     );
   }

   function Toolbar() {
     return (
       <div>
         <ThemedButton />
       </div>
     );
   }
   ```

3. **Consume Context**:
   - Use the context value in a class component with the `Consumer` or in a function component with the `useContext` hook.
   ```jsx
   function ThemedButton() {
     const theme = useContext(ThemeContext);
     return <button style={{ background: theme === 'dark' ? '#333' : '#CCC' }}>Themed Button</button>;
   }
   ```

### Advanced Features

1. **Updating Context**:
   - To update the context value, you can pass a state and its updater function from the provider.
   ```jsx
   import React, { useState } from 'react';

   const ThemeContext = React.createContext();

   function App() {
     const [theme, setTheme] = useState('light');

     return (
       <ThemeContext.Provider value={{ theme, setTheme }}>
         <Toolbar />
       </ThemeContext.Provider>
     );
   }

   function Toolbar() {
     return (
       <div>
         <ThemedButton />
         <ToggleThemeButton />
       </div>
     );
   }

   function ThemedButton() {
     const { theme } = useContext(ThemeContext);
     return <button style={{ background: theme === 'dark' ? '#333' : '#CCC' }}>Themed Button</button>;
   }

   function ToggleThemeButton() {
     const { setTheme } = useContext(ThemeContext);
     return <button onClick={() => setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>;
   }
   ```

2. **Nested Context**:
   - You can nest multiple contexts by wrapping components with multiple providers.
   ```jsx
   const UserContext = React.createContext();

   function App() {
     const [theme, setTheme] = useState('light');
     const [user, setUser] = useState({ name: 'John Doe' });

     return (
       <ThemeContext.Provider value={{ theme, setTheme }}>
         <UserContext.Provider value={{ user, setUser }}>
           <Toolbar />
         </UserContext.Provider>
       </ThemeContext.Provider>
     );
   }

   function Toolbar() {
     return (
       <div>
         <ThemedButton />
         <UserGreeting />
       </div>
     );
   }

   function ThemedButton() {
     const { theme } = useContext(ThemeContext);
     return <button style={{ background: theme === 'dark' ? '#333' : '#CCC' }}>Themed Button</button>;
   }

   function UserGreeting() {
     const { user } = useContext(UserContext);
     return <div>Hello, {user.name}</div>;
   }
   ```

### Conclusion

The Context API is a powerful tool in React for managing global state and passing data down through the component tree without prop drilling. It simplifies state management in large applications and enhances code readability and maintainability. By understanding and effectively utilizing context, you can build more robust and scalable React applications.