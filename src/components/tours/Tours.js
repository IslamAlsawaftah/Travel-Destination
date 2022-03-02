import "./Tours.css"
import React from 'react'
import Tour from '../tours/tour/Tour.js';
const Tours = ({ data }) => {
    return (
        <div className="parent-div">
            {
                data.map((ele => {
                    return (
                        <>
                            <div className="child-div">
                                <Tour data={ele} />
                            </div>
                        </>
                    )
                })
                )
            }
        </div>
    )
};
export default Tours;