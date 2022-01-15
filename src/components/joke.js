export default function Joke(data)
{
    let joke = data.data.d[data.data.x];

    return (
        <div className="jokeSection">{joke}</div>
    )
}