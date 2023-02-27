const joi  = require('./entry');

const ussd = joi.object({
    text: joi.string().required(),
    step: joi.string().required(),
})

const deleteUssd = joi.object({
    step: joi.string().required(),
})

module.exports = {
    ussd,
    deleteUssd
}