import { useState, useEffect } from "react";
import axios from "axios";
import GetNewJoke from "./GetNewJoke";

const FetchNorrisJoke = () => {
    const [joke, setJoke] = useState("No joke found");
    const [loading, setLoading] = useState(true);

    useEffect(() => fetchJokeFromAPI(), [loading]);

    const fetchJokeFromAPI = async () => {
        try  {
            const fetchAPI = await axios.get("https://api.chucknorris.io/jokes/random").then((response) => response?.data?.value?.trim() || "No joke found");
            setJoke(fetchAPI);
            setLoading(false);
        }
        catch (error) {
            setJoke("No joke found");
            setLoading(false);
        }

        return;
    };

    return (
        <div className="joke-container">
            <p>{ loading ? "Loading joke..." : joke }</p>
            <GetNewJoke fetchJokeFromAPI={ fetchJokeFromAPI }/>
        </div>
    );
};

export default FetchNorrisJoke;
