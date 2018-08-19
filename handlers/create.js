module.exports.handler = async (event) => {
    return {
        statusCode: 201,
        body: JSON.stringify({
            data: {
                message: 'Created',
                input: event
            }
        })
    };
};