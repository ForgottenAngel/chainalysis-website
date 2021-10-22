// Function to retrieve recommendation.
exports.getRecommendation = function(currency, action) {

    // Form class name from arguments
    let classVal = String(currency) + '-' + String(action) + '-val';

    let left_obj = ('#left-table .' + classVal).toLowerCase();
    let right_obj = ('#right-table .' + classVal).toLowerCase();

    console.log(left_obj);
    console.log(right_obj);

    // Retrieve prices as strings and remove the $ character from the start.
    let left_val = document.querySelector(left_obj).innerHTML.substring(1);
    let right_val = document.querySelector(right_obj).innerHTML.substring(1);

    // Convert prices from strings to floats/numbers.
    left_val = parseFloat(left_val);
    right_val = parseFloat(right_val);

    // Turn values negative if buying (as buying is losing money.)
    if (action === 'Buy') {
        left_val *= -1;
        right_val *= -1;
    } else if (action !== 'Sell') {
        console.log('Invalid action passed. Use \'Buy\' or \'Sell\'')
        return 'ERROR';
    }

    // Compare and return the larger value. (Less negative number if buying.)
    if (left_val > right_val) {
        return document.querySelector('#left-table .table-website-header').innerHTML;
    } else {
        return document.querySelector('#right-table .table-website-header').innerHTML;
    }
};