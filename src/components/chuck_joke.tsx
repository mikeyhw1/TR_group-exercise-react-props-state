import Joke from "../joke";
interface ChuckJokeProps {
    jokeItem: Joke;
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({ jokeItem }) => {
    const { id, joke } = jokeItem;
    return (
        <>
            <p>Joke ID:{id}</p>
            <p>{joke}</p>
            <hr />
        </>
    );
};

export default ChuckJoke;
