import './App.css';

// Component Files
import PriceTable from './components/PriceTable.js';
import Recommendation from './components/Recommendation.js';

function App() {
  return (
    <div className='App'>
      <h1 className = 'site-title'>BTC vs. ETH Price Comparison</h1>
      <div className='price-container'>
        <PriceTable id='left-table' exchange='Gemini' />
        <PriceTable id='right-table' exchange='Coinbase' />
      </div>
      <p className='recommendation-header'>Recommendations</p>
      <Recommendation currency='BTC' />
      <Recommendation currency='ETH' />
    </div>
  );
}

export default App;
