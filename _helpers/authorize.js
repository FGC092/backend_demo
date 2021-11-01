module.exports.authorize = function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: "Unauthorized" });
    }

    // Validate token with selected auth provider
    if (req.headers.authorization !== 'Basic ABCD') {
        return res.status(401).send({ message: "Invalid token, please try 'Basic ABCD'" });
    }

    next();
}