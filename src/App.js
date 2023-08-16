
import { RouterProvider } from 'react-router-dom';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.css';
import router from './Routes/routes.config';

function App() {
  return (
    <div>
     
   <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
