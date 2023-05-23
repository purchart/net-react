import { ApiGet } from "../common/Api"
import React, { useState, useEffect } from "react"
import MovieTable from "./MovieTable"

const MovieIndex = (props) => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        ApiGet("/api/movies").then((data) => setMovie(data))
    }, [])

    return(
        <div>
            <h1>Seznam filmu</h1>
            <hr />
            <MovieTable
                items={movie}
                label="Pocet filmu:"
            />
        </div>
    )

}

export default MovieIndex;