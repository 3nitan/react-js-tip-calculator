import './App.css';
import { useState } from 'react';
// import Header from './components/header';

function App() {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numOfPeople, setNumOfPeople] = useState(0);

  const handleBillChange = (e) => {
    setBill(parseFloat(e.target.value));
  };

  const handleTipPercentageChange = (percentage) => {
    setTipPercentage(percentage);
  };

  const handleNumOfPeopleChange = (e) => {
    setNumOfPeople(parseInt(e.target.value));
  };

  const calculateTipAmount = () => {
    if (numOfPeople === 0) {
      return 0;
    }
    const tipAmount = (bill * (tipPercentage / 100)) / numOfPeople;
    return tipAmount.toFixed(2);
  };

  const calculateTotalAmount = () => {
    const totalAmount = bill + bill * (tipPercentage / 100);
    return totalAmount.toFixed(2);
  };

  return (
    <div className='App'>
      <header>
        <img src='/assets/logo.svg' alt='' />
      </header>

      <div className='container'>
        <form action='#' className='form'>
          <div className='form-input'>
            <label>Bill</label>
            <br />
            <img src='/assets/icon-dollar.svg' alt='dollar icon' />
            <input
              type='number'
              placeholder='0.00 '
              value={bill}
              onChange={handleBillChange}
            />
          </div>

          <div className='form-tip'>
            <label>Select Tip %</label>
            <br />
            <div className='btn-container'>
              <button
                className='tip-btn'
                onClick={() => handleTipPercentageChange(5)}
              >
                5%
              </button>
              <button
                className='tip-btn'
                onClick={() => handleTipPercentageChange(10)}
              >
                10%
              </button>
              <button
                className='tip-btn'
                onClick={() => handleTipPercentageChange(15)}
              >
                15%
              </button>
              <button
                className='tip-btn'
                onClick={() => handleTipPercentageChange(25)}
              >
                25%
              </button>
              <button
                className='tip-btn'
                onClick={() => handleTipPercentageChange(50)}
              >
                50%
              </button>
              <button
                className='custom-tip'
                onClick={() => setTipPercentage(0)}
              >
                Custom
              </button>
            </div>
          </div>

          <div className='form-input'>
            <label>Number of People</label>
            <br />
            <img src='/assets/icon-person.svg' alt='' />
            <input
              type='number'
              placeholder='0 '
              value={numOfPeople}
              onChange={handleNumOfPeopleChange}
              required
            />
          </div>
        </form>
        <div className='output-container'>
          <div className='output-wrapper'>
            <div className='output'>
              <p className='output-title'>
                Tip Amount
                <br />
                <span className='output-subtitle'>/person</span>
              </p>

              <p className='output-value'>${calculateTipAmount()}</p>
            </div>

            <div className='output'>
              <p className='output-title'>
                Total
                <br />
                <span className='output-subtitle'>/person</span>
              </p>
              <p className='output-value'>${calculateTotalAmount()}</p>
            </div>

            <button
              className='reset-btn'
              onClick={() => {
                setBill(0);
                setTipPercentage(0);
                setNumOfPeople(0);
              }}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
