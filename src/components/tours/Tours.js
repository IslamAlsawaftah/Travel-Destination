import "./Tours.css"
const Tours = ({ data }) => {
    return (
        <div className="parent-div" >
            {
                data.map((element, index) => {
                    return (
                        <div key={index} className="child-div"><h3>{element.name}</h3>
                            <img src={element.image} alt="" /></div>
                    )
                })
            }
        </div>
    )
};
export default Tours;