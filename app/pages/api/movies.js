
export default async function handler(req, res){

    if(req.method === 'GET'){
        const apiKey = process.env.MOVIE_DB_API_KEY;
        const apiUrl = `http://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`

        try{
            const response = await fetch(apiUrl);
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            res.status(200).json(data);
        }catch(error){
            console.error('Failed to fetch', error);
            res.status(500).json({ error: 'Failed to fetch '})
        }
    }else{
        res.setHeader('ALLOW, ['GET']);
        res.status(405).end(`MTHOED${req.method}`)
    }

}