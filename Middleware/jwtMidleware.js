const jwt = require("jsonwebtoken")
const jwtmiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        // console.log(req);

        if (token) {
            const val = jwt.verify(token, process.env.secretKey)
            // console.log(val);
            req.payload = val.userId
            next()
        } else {
            res.status(400).json("Invalid Token")
        }

    } catch (err) {
        console.log('jwt', err);
        res.status(400).json(err)
    }

}
module.exports = jwtmiddleware