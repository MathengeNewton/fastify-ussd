const { SentryErrorLogging } = require('../utils/exceptionHandler');

async function main(fastify){
    try{
        const create_initial_step = {
            data: {
                step: "1",
                response: `END The system is currently new. Try later when data has been added to the database.`,
            }
        }
        const check_if_step_exist = await fastify.prisma.USSDSteps.findMany({
            where:{
                step: "1"
            }
        })
        if(!check_if_step_exist.length){
            await fastify.prisma.USSDSteps.create(create_initial_step);
        }
        console.log(`Seeding process complete. Application will now run`);
    }catch(error){
        SentryErrorLogging(error)
        console.log(`Error: ${error}`)
        await fastify.prisma.$disconnect()
        process.exit(1)
    }
}

module.exports = { main };