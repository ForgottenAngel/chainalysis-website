import React from "react";
var recHandler = require('./RecommendationHandler.js');

class Recommendation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rec_buy_exchange: 'NULL',
            rec_sell_exchange: 'NULL2'
        } 
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            2000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {

        let buy_exchange = recHandler.getRecommendation(this.props.currency, 'Buy');
        let sell_exchange = recHandler.getRecommendation(this.props.currency, 'Sell');

        this.setState({
            rec_buy_exchange: buy_exchange,
            rec_sell_exchange: sell_exchange
        })
    }

    render() {
        return (
            <>
                <table className='recommendations'>
                    <tbody className='price-section'>
                        <tr>
                            <td>You should buy {this.props.currency} from {this.state.rec_buy_exchange}.</td>
                        </tr>
                        <tr>
                            <td>You should sell {this.props.currency} from {this.state.rec_sell_exchange}.</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default Recommendation;