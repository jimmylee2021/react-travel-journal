import marker from "../assets/marker.png"
export default function Entry(props){
    return(
        <article>
            <div className="entry-div">
            <div className="img-div">
                <img src={props.entry.img.src} alt={props.entry.img.alt} srcset="" />
            </div>
            <div className="info-box">
                <img src={marker} alt="" />
                <small>{props.entry.country}</small>
                <a href={props.entry.googleMapsLink}>View on Google maps</a>
                 <h1>{props.entry.title}</h1>
                 <div className="txt-box">
                    <h3>{props.entry.dates}</h3>
                    <p>{props.entry.text}</p>
                 </div>
            </div>
            </div>
        </article>
    )
}