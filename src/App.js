
import './App.css';
import Main from './Component/Layout/Main';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className="App">
      
     <RouterProvider router={router}></RouterProvider>
     

    </div>
  );
}

export default App;
