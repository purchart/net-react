import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ApiGet } from '../common/Api';
import DateStringFormatter from '../common/DateStrtingFormatter';
import Role from "./Role";

const PersonDetail = () => {
    const { id } = useParams();
    const [person, setPerson] = useState();

    useEffect(() => {
        ApiGet("/api/people/" + id)
            .then((data) => {
                setPerson({
                    name: data.name,
                    birthDate: DateStringFormatter(data.birthDate, true),
                    country: data.country,
                    biography: data.biography,
                    role: data.role,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const role = Role.DIRECTOR === person.role ? "Reziser" : "Herec";

    return(
        <div>
            <h1>Detail osobnosti</h1>
            <hr />
            <h3>{person.name}</h3>
            <p>
                {role}, nar. {person.birthDate}, {person.country}
            </p>
            <p>
                <strong>Biografie:</strong>
                <br />
                {person.biography}
            </p>
        </div>
    );
};

export default PersonDetail;
