import { useState } from "react";
import { api } from "../services/api";

interface IMovie {
    "Title": string;
    "Year": string;
    "imdbID": string;
    "Type": string;
    "Poster": string;
}

interface ISearchResponse {
    Search: IMovie[];
    totalResults: string;
    Response: string;
}

export function Home() {
    const [text, setText] = useState('');
    const [searchResult, setSearchResult] = useState();

    function handleClick() {
        const result = await api.get<ISearchResponse>(`(urldaapi)s=${text}`)

        console.log(api.data)
    }

    return (
        <>
            <h1>Busque um filme</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={handleClick}>Buscar</button>

            {searchResult ?
                searchResult.Response == "False" ? 
                <div>
                    <b>
                        Nenhum filme encontrado! Tente novamente!
                    </b>
                </div>
                :<div>
                    <ul>
                        {searchResult.Search.map((movie) => (
                        <li>{movie.title}</li>
                    ))}     
                    </ul>
                </div>
                :
                <div>
                    <b>Busque seu filme</b>
                </div>
            }
            
        </>
    )
}