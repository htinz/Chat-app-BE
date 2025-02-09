const helloworldMessage = require('../services/helloworld.service');

get = (req, res, next) => {
    try {
        message = helloworldMessage.get();

        res.json({'message': message});
    } catch (error) {
        console.error(`Error in helloworld.controller.get: ${error}`);
        next(error);
    }
}

set = (req, res, next) => {
    try {
        message = helloworldMessage.set(req.body.message);

        res.json({'message': message});
    } catch (error) {
        console.error(`Error in helloworld.controller.set: ${error}`);
        next(error);
    }
}

module.exports = {
    get,
    set
};