import React, {useEffect, useState} from "react"
import {ApiGet} from "../common/Api"
import PersonTable from "./PersonTable"

const PersonIndex = () => {
    const [director, setDirector] = useState([])
    const [actor, setActor] = useState([])

    useEffect(() => {
        ApiGet("/api/directors").then((data) => setDirector(data))
        ApiGet("/api/actors").then((data) => setActor(data))
    }, [])

    return (
        <div>
            <h1>Seznam osobnosti</h1>
            <hr />

            <div className="row">
                <div className="col">
                    <PersonTable
                        items={actor}
                        label="Pocet hercu:"
                    />
                </div>
                <div className="col">
                    <PersonTable
                        items={director}
                        label="Pocet reziseru:"
                    />
                </div>
            </div>
        </div>
    )
}

export default PersonIndex