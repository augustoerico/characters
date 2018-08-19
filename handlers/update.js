module.exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            data: {
                message: 'Updated',
                input: event
            }
        })
    };
};