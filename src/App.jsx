import './App.css';
import Login from './pages/Login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './pages/Register/Register';
import { useContext } from 'react';
import { AuthContext } from './context/Auth';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';

function App() {
  const { auth } = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: '/',
      element: ( 
        auth ? <Home /> : < Login />
      ),
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/*',
      element: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
