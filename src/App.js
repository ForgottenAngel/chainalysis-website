import './App.css';

// Component Files
import PriceContainer from "./components/PriceContainer";

function App() {
  return (
    <div className='App'>
      <h1 className = 'site-title'>BTC vs. ETH Price Comparison</h1>
      <PriceContainer/>
      <p className='recommendation-header'>Recommendations</p>
      <div className='recommendations'>
        <p>You should buy BTC from NAME.</p>
        <p>You should sell BTC with NAME.</p>
      </div>
      <div className='recommendations'>
        <p>You should buy ETH from NAME.</p>
        <p>You should sell ETH with NAME.</p>
      </div>
    </div>
  );
}

export default App;
