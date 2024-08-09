

// export default async function handler(req, res){

//     const API_KEY = process.env.TMB_API_KEY;

//     // if(!API_KEY){
//     //     return res.status(500).json({ error: "API key not found" });
//     // }

//     try{
//         console.log("fetching  movies");
//         const response = await fetch(`http://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);

//         if(!response.ok){
//             throw new Error(`failed to fetch movies: ${response.statusText}`);
//         }

//         const data = await response.json();
//         console.log('Movies data',data);
//         res.status(200).json(data);

//     }catch(error){
//         console.error('Error fetching data', error);
//         // res.status(500).json({ error: error.message });
//     }

// }

export default async function handler (req, res){

    console.log("Fetching movies");

    if(req.method === 'GET'){

        const API_KEY = process.env.TMB_API_KEY;
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    
    try{

        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error('Failed to feth movies: ' + response.status);
        }
        const data = await response.json();
        res.status(200).json(data);

    }catch(error){
        console.error('Error Fetching datz', error);
        res.status(500).json({ error: "Failed to fetch " + error.message });

    } 
    
    }else{
        console.log('Not Going to happen');
        // res.setHeader('Allow', ['GET']);
        // res.status(405).end(`Method ${req.method} Not Allowed`);
    }

}

