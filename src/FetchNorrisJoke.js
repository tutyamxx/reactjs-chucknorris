import { useState, useEffect } from "react";
import axios from "axios";

const FetchNorrisJoke = () => {
    const [joke, setJoke] = useState("No joke found");

    useEffect(() => fetchJokeFromAPI(), []);

    const fetchJokeFromAPI = async () => {
        const fetchAPI = await axios.get("https://api.chucknorris.io/jokes/random").then((response) => response?.data?.value?.trim() || "No joke found");
        setJoke(fetchAPI);
    };

    return (
        <div className="joke-container">
            <p>{ joke }</p>
            <button onClick={ async () => fetchJokeFromAPI() } className="fetch-button">Another One!</button>
        </div>
    );
};

export default FetchNorrisJoke;
