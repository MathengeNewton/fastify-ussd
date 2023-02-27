const ussdSchema = {
    tags: ["USSD"],
    consumes: ['multipart/form-data'],
    summary: 'API ussd callback function url. Text example, 1*2*3, 1*0',
    body:{
        type:'object',
        properties : {
            text: {type: 'string'},
        },required:['text']
    }
}

const createUssdResponses = {
    tags: ["USSD"],
    consumes: ['multipart/form-data'],
    summary: 'Admin create Ussd responses via the dashboard.',
    body:{
        type:'object',
        properties : {
            text: {type: 'string'},
            step: {type: 'string'},
        },required:['text','step']
    }
}

const ReadUssdResponses = {
    tags: ["USSD"],
    consumes: ['multipart/form-data'],
    summary: 'Admin Read All Ussd responses.',
}

const updateUssdResponse = {
    tags: ["USSD"],
    consumes: ['multipart/form-data'],
    summary: 'Admin update Ussd responses via the dashboard.',
    body:{
        type:'object',
        properties : {
            text: {type: 'string'},
            step: {type: 'string'},
        },required:['text','step']
    }
}

const deleteUssdResponse = {
    tags: ["USSD"],
    consumes: ['multipart/form-data'],
    summary: 'Admin Delete Ussd responses via the dashboard.',
    body:{
        type:'object',
        properties : {
            step: {type: 'string'},
        },required:['text','step']
    }
}

module.exports = {
    ussdSchema,
    createUssdResponses,
    ReadUssdResponses,
    updateUssdResponse,
    deleteUssdResponse
}