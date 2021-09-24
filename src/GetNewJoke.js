const GetNewJoke = (props) => {
    return (
        <button onClick={ async () => props.fetchJokeFromAPI() } onKeyPress={ async () => props.fetchJokeFromAPI() } className="fetch-button">Another One!</button>
    );
};

export default GetNewJoke;