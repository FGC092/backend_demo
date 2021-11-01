module.exports.twoDec = function (num) {
    return Math.round(num * 100) / 100
}

module.exports.inputValidation = function(req, res, next){
    var regex = new RegExp('^[0-9]+$');
    if (!regex.test(req.params.outputNumber)){
        return res.status(400).send({ message: "Invalid max listed products parameter. Value should be a number." });
    }
    next()
}