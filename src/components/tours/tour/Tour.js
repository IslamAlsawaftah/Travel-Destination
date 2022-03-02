import React from 'react'
import { Link } from 'react-router-dom';
function Tour({ data }) {
    return (
        <>
            <Link to={`/city/${data.id}`}>
                <div key={data.id}>
                    <h3>city :{data.name}</h3>
                    <img src={data.image} alt="" />
                </div>
            </Link>
        </>
    )
}
export default Tour;