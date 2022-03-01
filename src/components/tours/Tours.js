import "./Tours.css"
const Tours = (props) => {
    return (
        <div className="parent-div">
            {
                props.datas.map(element => {
                    return (
                        <div className="child-div"><h3>{element.name}</h3>
                            <img src={element.image} alt="" /></div>
                    )
                })
            }
        </div >
    )
};
export default Tours;