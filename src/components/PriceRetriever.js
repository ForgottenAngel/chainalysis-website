// Function to retrieve prices.
exports.retrievePrice = async function(currency, exchange, action) {

    let urlDict = {
        // Gemini API Links
        'BTC_Gemini' : 'https://api.gemini.com/v1/pubticker/btcusd',
        'ETH_Gemini' : 'https://api.gemini.com/v1/pubticker/ethusd',

        // Coinbase API Links
        'BTC_Coinbase_Buy' : 'https://api.coinbase.com/v2/prices/BTC-USD/buy',
        'BTC_Coinbase_Sell' : 'https://api.coinbase.com/v2/prices/BTC-USD/sell',
        'ETH_Coinbase_Buy' : 'https://api.coinbase.com/v2/prices/ETH-USD/buy',
        'ETH_Coinbase_Sell' : 'https://api.coinbase.com/v2/prices/ETH-USD/sell'
    }

    let price;

    // Convert the args into the proper key format.
    let urlKey;

    switch(exchange) {
        case ('Gemini'):
            urlKey = String(currency) + '_' + String(exchange);
            break;
        case ('Coinbase'):
            urlKey = String(currency) + '_' + String(exchange) + '_' + String(action);
            action = 'Coinbase'
            break;
        default:
            urlKey = 'undefined';
    }

    // If the key value doesn't exist, return.
    if(!(urlKey in urlDict)) {
        console.log("No key value found for " + urlKey);
        return;
    }

    price = await fetchPrice(urlDict[urlKey], action);
    return price;
};

async function fetchPrice(url, action) {
    let response = await fetch(url);
    let obj = await response.json();
    
    switch (action) {
        case ('Buy'):
            return obj.bid;
        case ('Sell'):
            return obj.ask;
        case ('Coinbase'):
            return obj.data.amount;
        default:
            console.log('Invalid action passed. Use \'Buy\' or \'Sell\'')
            return 0;
    }
} 