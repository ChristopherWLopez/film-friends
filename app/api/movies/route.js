export async function Handler(req, res){
    const API_KEY = process.env.TMDB_API_KEY;
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`

    try{

        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        return new Response(JSON.stringify(data), { status: 200 });
        
    }catch(e){
        console.error(error);
        return new Response(JSON.stringify({ error: "Failed to fetch movies" + error }));
    }
}