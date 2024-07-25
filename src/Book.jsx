import "./App.css"

function Book(props) {
    return (
        <>
            <div className="bookContainer">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <h2>Year - {props.year}</h2>
                <img src={props.imgLink} alt="" /> <br />
                {/* <h3>{props.likes}</h3> */}
                
                <button onClick={props.button}>Click me</button>
            </div>
        </>
    )
}

export default Book
