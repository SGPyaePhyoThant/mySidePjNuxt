
export default defineEventHandler(async(event) => {

        // handle query params
        // const { name }   = getQuery (event)
        // const { fes }   = await readBody(event)
        // const { percent }   = await readBody(event)

        // api call with private key
        const { data } =await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_ERBngC5zKkMAJdgi5YNo6jtGuHOgH0ilov3CwJnw')
    return data
    }
    ) 
    