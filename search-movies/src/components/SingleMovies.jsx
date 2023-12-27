import { useParams } from "react-router-dom"
import { useFetch } from "./hooks/UseFetch";



const SingleMovies  = () => {
    const { id } = useParams();
    const {isLoading, data} = useFetch(`&i=${id}`);

    if (isLoading) {
        return <div className="loading"></div>
    }

    const { Poster, Title, Plot, Year, Country, Director, Released, Runtime } = data;
    return (
        !isLoading ?
        <div className="single-movie">
            <img src={Poster} alt={Title} />
            <div className="single-info">
                <h2>{ Title }</h2>
                <p> { Plot }</p>
                <p><strong>Country: </strong>{ Country }</p>
                <p><strong>Director: </strong>{ Director }</p>
                <p><strong>Released: </strong>{ Released }</p>
                <p><strong>Runtime: </strong>{ Runtime }</p>
                <p><strong>Year: </strong>{ Year }</p>
            </div>
</div>
:" "
);
}

export default SingleMovies;
