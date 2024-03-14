
import './App.css';

function App() {
  return (
    <>
    <div className='container1'>
      <label>Email</label>
      <input type='text' placeholder='email'></input>
      <label>Card-Number</label>
      <input type='number' placeholder='**** **** **** ****'></input>
      <div className='expiry'>
      <label>Expiry-Date</label>
      <input type='number' placeholder='mm/yy'></input>
      <label>CVV</label>
      <input type='number' placeholder='***'></input>
      <input type='checkbox' ></input><label >I've promo code</label>
      </div>
     

    </div>
    <div className='container2'></div>
    </>
  );
}

export default App;
