const loginSchema =  {
    tags: ['Authentication'],
    consumes: ['multipart/form-data'],
    summary: 'Non-admin users login',
    body:{
        type:'object',
        properties : {
            email: {type: 'string', format: 'email'},
            password:{type:"string"},
            channel: {
                type:"string", 
                enum: ['email-password', 'socials']
            }           
        }
    }
};

const adminLoginSchema =  {
    tags: ['Authentication'],
    summary: 'Admin users login',
    consumes: ['multipart/form-data'],
    body:{
        type:'object',
        properties : {
            email: {type: 'string'},
            password:{type:"string"}
        }
    }
};

const userResetPasswordSchema = {
    tags: ['Authentication'],
    summary: 'Non-admin users initiate reset password.',
    consumes: ['multipart/form-data'],
    body:{
        type:'object',
        properties : {
            email: {type: 'string'}
        }
    }
};

const adminResetPasswordSchema = {
    tags: ['Authentication'],
    summary: 'Admin users initiate reset password.',
    consumes: ['multipart/form-data'],
    body:{
        type:'object',
        properties : {
            email: {type: 'string'}
        }
    }
};

const confirmOTPSchema = {
    tags: ['Authentication'],
    summary: 'Non-admin user confirm OTP and reset password.',
    consumes: ['multipart/form-data'],
    body:{
        type:'object',
        properties : {
            email: {type: 'string'},
            otp:{type:"string"},
            new_password:{type:"string"}
        }
    }
}

const adminConfirmOTPSchema = {
    tags: ['Authentication'],
    consumes: ['multipart/form-data'],
    summary: 'Admin user confirm OTP and reset password.',
    body:{
        type:'object',
        properties : {
            email: {type: 'string'},
            otp:{type:"string"},
            new_password:{type:"string"}
        }
    }
}

module.exports = { 
    loginSchema, 
    userResetPasswordSchema, 
    confirmOTPSchema,
    adminConfirmOTPSchema,
    adminLoginSchema,
    adminResetPasswordSchema,
};
