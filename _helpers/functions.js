const axios = require('axios').default;
var ss = require('simple-statistics')
var utils = require('./utils')

module.exports.gatherData = async function (outputNumber = undefined){   
    console.log('Gathering data...')
    const response = await axios.get('https://recommendation-api.prod.zooplus.net/v2/sites/15/es/pages/web_category_l4/recommendations')
    let raw = response.data
    let products = []
    
    for (const data of raw) { products = [...products, ...data.recommendations] }

    const summary = {
        number_of_products: products.length,
        average_price: `${utils.twoDec(ss.mean(products.map(a=>a.current_price)))}€`,
        average_rating: `${utils.twoDec(ss.mean(products.map(a=>a.rating)))} stars`,
        products
    }

    if (outputNumber){ summary.products = summary.products.slice(0,outputNumber) }

    return summary
}
