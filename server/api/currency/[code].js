export default defineEventHandler(async (event) => {
    try {
      const { code } = event.context.params;
      const { currencyKey } = useRuntimeConfig();
      const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`;
      const { data } = await useFetch(uri);
      return data;
    } catch (error) {
      console.error("Error fetching currency data:", error);
      // Handle the error, maybe return a default response or an error status
      return { error: "Failed to fetch currency data" };
    }
  });