const { UssdHandler } = require("../../controllers/handler/ussd")
const { 
    ussdSchema,
    createUssdResponses,
    ReadUssdResponses,
    updateUssdResponse,
    deleteUssdResponse
} = require('../schema/ussd')

function ussdRoutes(fastify, options, done){
    const ussdHandler = new UssdHandler(fastify);

    const ussdFunc = {
        schema:ussdSchema,
        handler: ussdHandler.processInput
    }

    const readAllResponsesFunc = {
        schema: ReadUssdResponses,
        handler:ussdHandler.readUSSDOptions
    }

    const createUssdResponseFunc = {
        schema:createUssdResponses,
        handler:ussdHandler.createAndUpdateUSSDOption
    }

    const updateResponseFunc = {
        schema:updateUssdResponse,
        handler:ussdHandler.createAndUpdateUSSDOption
    }

    const deleteResponseFunc = {
        schema:deleteUssdResponse,
        handler:ussdHandler.deleteUSSDOption
    }

    fastify.post('/ussd',ussdFunc);
    fastify.post('/ussd-responses',createUssdResponseFunc);
    fastify.get('/ussd-responses',readAllResponsesFunc);
    fastify.put('/ussd-responses',updateResponseFunc);
    fastify.delete('/ussd-respnses',deleteResponseFunc);

    done()

}

module.exports = ussdRoutes;