import { useState, useEffect } from "react";
import axios from "axios";
import GetNewJoke from "./GetNewJoke";
import loadingAnimation from "../images/loading.svg";

const FetchNorrisJoke = () => {
    const [joke, setJoke] = useState("No joke found");
    const [loading, setLoading] = useState(true);

    useEffect(() => fetchJokeFromAPI(), []);

    const fetchJokeFromAPI = async () => {
        try  {
            const fetchAPI = await axios.get("https://api.chucknorris.io/jokes/random").then((response) => response?.data?.value?.trim() || "No joke found");

            setLoading(true);

            setTimeout(() => {
                setJoke(fetchAPI);
                setLoading(false);
            }, 2000);
        }

        catch (error) {
            setJoke("No joke found");
            setLoading(false);
        }

        return;
    };

    return (
        <div className="joke-container">
            <p>{loading ? <img alt="Loading animation" src={ loadingAnimation } /> : joke }</p>
            <GetNewJoke fetchJokeFromAPI={ fetchJokeFromAPI } loading={ loading }/>
        </div>
    );
};

export default FetchNorrisJoke;
