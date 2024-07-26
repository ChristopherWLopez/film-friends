export default async function handler(req, res){
    const API_KEY = process.env.TMB_API_KEY;
    const response = await fetch();
    const data = await response.json();

    res.status(200).json(data);
}