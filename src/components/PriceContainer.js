import React from "react";

// Component Files
import PriceTable from "./PriceTable";

class PriceContainer extends React.Component {
    render() {
        return (
            <div className='price-container'>
                <PriceTable/>
                <PriceTable/>
            </div>
        )
    }
}

export default PriceContainer;