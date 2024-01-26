export default defineEventHandler(async(event) => {
        const { data } =await useFetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_ERBngC5zKkMAJdgi5YNo6jtGuHOgH0ilov3CwJnw')
    return data
    }
    ) 
    