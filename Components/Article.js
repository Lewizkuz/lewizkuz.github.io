
export default function Article(props) {
    return(
        <article>
            <h1>{props.head}</h1>
            <p>{props.Children}</p>
        </article>
    );
}