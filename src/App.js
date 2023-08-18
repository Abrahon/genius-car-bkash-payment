
import { RouterProvider } from 'react-router-dom';

import './App.css';
import router from './Router/Routes/Routes';

function App() {

  return (
    
    <div className='max-w-screen-lg mx-auto'>
      {/* <button className="btn btn-outline btn-warning">Warning</button>
      <button className="btn btn-outline btn-error">Error</button> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
