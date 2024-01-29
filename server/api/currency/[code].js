export default defineEventHandler(async (event) => {
  console.log('event',event)
    try {
      const { code } = event.context.params
      const { currencyKey } = useRuntimeConfig();
      const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`
      const { data } = await $fetch(uri);
      return data
    } catch (error) {
      return { error: "Failed to fetch currency data" };
    }
  });