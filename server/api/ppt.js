
export default defineEventHandler(async(event) => {
        // handle query params
        const { name }   = getQuery (event)
        const { fes }   = await readBody(event)
        const { percent }   = await readBody(event)
    return {
        message:`Hello This is ${name} month, You get all items ${percent} % By ${fes} .`
    }
    }
    ) 
    