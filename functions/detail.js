const items = require('./../assets/detail.json');

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify(items)
    }
}