import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { UserProvider } from './Context/userContext.jsx'; // UserProvider를 import

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
