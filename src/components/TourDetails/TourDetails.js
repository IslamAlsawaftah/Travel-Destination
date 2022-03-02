import React from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function TourDetails({ data }) {
    let { id } = useParams();
    console.log(id)
    let tourDetails = data.filter((ele) => { return ele.id === id });
    return (

        tourDetails.map((value) => {
            return (
                <>
                    <Header />
                    <h3>Tour id : {value.id}</h3>
                    <h2>Tour Name :{value.name}</h2>
                    <h3>Tour Info : {value.info}</h3>
                    <p>Tour Price :{value.price}</p>
                    <img src={value.image} />
                    <Footer />
                </>
            )
        })

    )
}

export default TourDetails;