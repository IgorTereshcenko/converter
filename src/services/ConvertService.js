
const ConvertServise = () => {

const getResurce = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    
const getConvert = async () => {
        const res = await getResurce(`https://www.cbr-xml-daily.ru/daily_json.js
        `);
        
        return {
                USD: res.Valute.USD.Value,
                EUR: res.Valute.EUR.Value,
                GBP: res.Valute.GBP.Value,
                DKK: res.Valute.DKK.Value,
                KZT: res.Valute.KZT.Value,
            }
    }

    return {getConvert};
 
}
 
export default ConvertServise;