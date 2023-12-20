import axios from "axios";
const base_url = 'https://api.api-ninjas.com/v1/facts',
    API_KEY = 'vQLF5tWQrNISDHmQuo1PAg==5Ki56hpkpBc09qEW'
export const fetchingFacts = async () => {
    try {
        const { data } = await axios.get(`${base_url}?X-Api-Key=${API_KEY}`)
        return data
    }
    catch (err) {
        console.log(err);
    }
}
