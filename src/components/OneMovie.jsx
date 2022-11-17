
function OneMovie(props) {
    return (
            <div className="card">
                <div className="card-image">
                    { props.poster === "N/A" ? <span>No img</span> : <img src={props.poster} alt="img" />}
                    
                </div>
                <div className="card-content">
                   <span className="card-title">{props.title}</span>
                   <p>Type: {props.type}</p>
                   <p>Year: {props.year}</p>
                </div>
                <div className="card-action">
                    <a href={props.poster}>Go to image poster</a>
                </div>
            </div>
    );
};

export default OneMovie;