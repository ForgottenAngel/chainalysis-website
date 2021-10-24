import React from "react";
import retrievePrice from './PriceRetriever.js';

class PriceTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            BTC_buy: 0.0,
            BTC_sell: 0.0,
            ETH_buy: 0.0,
            ETH_sell: 0.0
        }
    }

    componentDidMount() {
        this.tick();

        this.timerID = setInterval(
            () => this.tick(),
            2000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    async tick() {

        let BTCBuyPrice = await retrievePrice("BTC", this.props.exchange, 'Buy');
        let BTCSellPrice = await retrievePrice("BTC", this.props.exchange, 'Sell');
        let ETHBuyPrice = await retrievePrice("ETH", this.props.exchange, 'Buy');
        let ETHSellPrice = await retrievePrice("ETH", this.props.exchange, 'Sell');

        this.setState({
            BTC_buy: BTCBuyPrice,
            BTC_sell: BTCSellPrice,
            ETH_buy: ETHBuyPrice,
            ETH_sell: ETHSellPrice 
        });
    }

    render() {
        return (
            <>
                <table id={this.props.id} className='price-table'>
                    <thead>
                        <tr>
                            <th colSpan='3' className='table-website-header'>{this.props.exchange}</th>
                        </tr>
                        <tr>
                            <td> </td>
                            <td>Buy Price</td>
                            <td>Sell Price</td>
                        </tr>
                    </thead>
                    <tbody className='price-section'>
                        <tr>
                            <td>Bitcoin (BTC)</td>
                            <td className='btc-buy-val'>${this.state.BTC_buy}</td>
                            <td className='btc-sell-val'>${this.state.BTC_sell}</td>
                        </tr>
                        <tr>
                            <td>Etherium (ETH)</td>
                            <td className='eth-buy-val'>${this.state.ETH_buy}</td>
                            <td className='eth-sell-val'>${this.state.ETH_sell}</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default PriceTable;