const {sendIndexResponse} = require('../services/authorization')

module.exports = {
    index: (req,res) => {
        let response = sendIndexResponse()
        res.send(response)
    }
}