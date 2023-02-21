import './App.css';
// import Header from './components/header';

function App() {
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
            <input type='number' placeholder='0.00' />
          </div>

          <div className='form-tip'>
            <label>Select Tip %</label>
            <br />
            <div className='btn-container'>
              <button className='tip-btn'>5%</button>
              <button className='tip-btn'>10%</button>
              <button className='tip-btn'>15%</button>
              <button className='tip-btn'>25%</button>
              <button className='tip-btn'>50%</button>
              <button className='custom-tip'>Custom</button>
            </div>
          </div>

          <div className='form-input'>
            <label>Number of People</label>
            <br />
            <img src='/assets/icon-person.svg' alt='' />
            <input type='number' placeholder='0' />
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

              <p className='output-value'>$0.00</p>
            </div>

            <div className='output'>
              <p className='output-title'>
                Total
                <br />
                <span className='output-subtitle'>/person</span>
              </p>
              <p className='output-value'>$0.00</p>
            </div>

            <button className='reset-btn'>RESET</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
