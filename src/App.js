
import './App.css';
import Install from './install';
import StarRating from './components/StarRating';
import { Routes, Route } from 'react-router-dom';

import Cart from './cart/cart';
import Login from './login/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <h1>PWA 테스트</h1>
            <Install />
            <StarRating itemId={1} />
            <StarRating itemId={2} />
            <StarRating itemId={3} />
          </>
        }></Route>
        <Route path='/Cart' element={<Cart></Cart>}></Route>

        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;

