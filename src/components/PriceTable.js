import React from "react";

class PriceTable extends React.Component {
    render() {
        return (
            <>
                <table className='price-table'>
                    <thead>
                        <tr>
                            <th colspan='2' className='table-website-header'>Website Name Here</th>
                        </tr>
                    </thead>
                    <tbody className='price-section'>
                        <tr>
                            <td>Bitcoin (BTC)</td>
                            <td>$35,600.23</td>
                        </tr>
                        <tr>
                            <td>Etherium (ETH)</td>
                            <td>$378.90</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default PriceTable;