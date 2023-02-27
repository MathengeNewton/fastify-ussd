const { SentryErrorLogging, captureBreadCramps } = require('../../utils/exceptionHandler');
const { ussd} = require("../schema/ussd")
class UssdHandler {

    static response = "";

    checkIfExists(myList, itemToFind){
        return myList.some(obj => Object.keys(obj).some(key => obj[key] === itemToFind));
    }

    searchString(myList,searchString){
        return myList.find(obj => Object.values(obj).some(val => val === searchString));

    }

    async processInput(req,res){
        try{
            let text = req.body.text;

            await req.prisma.USSDLogs.create({
                data:{
                    session_id:req.body.sessionId,
                    service_code: req.body.serviceCode,
                    phone_number:req.body.phoneNumber
                }
            })

            const responses  = await req.prisma.USSDSteps.findMany({                
                where:{
                    is_active:true
                },
                orderBy: {
                    step: 'desc',
                },
            })

            const last_step = await req.prisma.USSDLogs.findMany({
                where:{
                    session_id:req.body.sessionId,
                    is_active:true
                },orderBy:{
                    created_at:'desc'
                },
                select:{
                    last_step:true
                },
                take:1,
                skip:0
            })

            response = responses[0].response;

            const request_string = text.trim().split("*");

            if(!request_string.length){
                captureBreadCramps();
            }else{
                request_string.map(responseVal => {
                    if(checkIfExists(responses,responseVal)){
                        response = responseVal.response;
                    }else{
                        if(last_step.length){
                            response = searchString(responses,last_step[0].last_step)
                        }
                    }
                })
            }
            res.type('text/plain').send(response)
        }catch(e){
            SentryErrorLogging(e);
            res.type('text/plain').send(`END The system is currently unavailable./n Try again later.`);
        }
    }
    
    async createAndUpdateUSSDOption(req, res){
        try{
            const request_object = req.body;            
            const value = ussd.validate(request_object);         
            if (!value.error){ 
                await req.prisma.USSDSteps.upsert({
                    where:{
                        step:request_object.step
                    },
                    create:{
                        response:request_object.text,
                        step:request_object.step,
                    },
                    update:{
                        response:request_object.text,
                        step:request_object.step,
                        updated_at: new Date().toISOString()
                    }
                })
                res.status(201).send({
                    response:"Request successfully"
                })
            }else{
                res.status(422).send({
                    details: 'Check payload and try again.'
                });
            }
        }catch(e){
            SentryErrorLogging(e);
            res.status(500).send({
                message:'An error Occurred. Please contact at newton.mathenge@ujuzicode.com admin and try again.'
            })
        }
    }

    async deleteUSSDOption(req, res){
        try{
            const request_object = req.body;            
            const value = ussd.validate(request_object);         
            if (!value.error){ 
                await req.prisma.USSDSteps.update({
                    where:{
                        step:request_object.step
                    },data:{
                        ...request_object,
                        is_active: false,
                        updated_at: new Date().toISOString()
                    }
                })
                res.status(201).send({
                    response:"Record removed successfully"
                })
            }else{
                res.status(422).send({
                    details: 'Check payload and try again.'
                });
            }
        }
        catch(error){
            SentryErrorLogging(error);
            res.status(500).send({
                message:'An error Occurred. Please contact at newton.mathenge@ujuzicode.com admin and try again.'
            })
        }
    }

    async readUSSDOptions(req, res){{
        try{
            const responses_ = await req.prisma.USSDSteps.findMany({
                select:{
                    step:true,
                    response:true,
                    created_at: true,
                    is_active:true
                }
            })
            if(responses_.length){
                res.status(200).send(responses_)
            }
            res.status(200).send([])
        }catch(e){
            console.log(e)
            SentryErrorLogging(e);
            res.status(500).send({
                message:'An error Occurred. Please contact at newton.mathenge@ujuzicode.com admin and try again.'
            })
        }
    }}

    async readUSSDLogs(req, res){{
        try{
            const responses_ = await req.prisma.USSDLogs.findAll({
                select:{
                    session_id:true,
                    service_code:true,
                    phone_number: true,
                }
            })
            if(responses_.length){
                res.status(200).send(responses_)
            }
            res.status(200).send([])
        }catch(e){
            SentryErrorLogging(e);
            res.status(500).send({
                message:'An error Occurred. Please contact at newton.mathenge@ujuzicode.com admin and try again.'
            })
        }
    }}

}

module.exports = {
    UssdHandler    
};