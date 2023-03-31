import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import './index.css';
import shopItems from './shopItems';

function App() {
  return (
    <>
      <nav className='bg-gray-800 p-3 text-xl'>
        <ul className='text-gray-100 list-none flex gap-3'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>
      <div className="content w-1/2 mx-auto p-6 bg-gray-200">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop shopItems={shopItems}/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
