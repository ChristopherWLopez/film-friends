export default async function handler(req, res){
    const API_KEY = process.env.TMB_API_KEY;
<<<<<<< HEAD
    const response = await fetch(`http://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
=======
    const response = await fetch();
>>>>>>> eb9f3a0b0036a136fa6af651f30fe2f0c5379d12
    const data = await response.json();

    res.status(200).json(data);
}