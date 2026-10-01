import Marker from "../assets/marker.png"

export default function Entry () {
  return (
    <article className="journal-entry">
      {/* Image */}
      <div className="main-image-container">
        <img className="main-image" src="" alt=""/>
      </div>
      {/* Text content */}
      <div className="info-container">
        <img src={Marker} className="marker" alt="marker icon"/>
        <span className="country"></span>
        <a>View on Google Maps</a>
        <h2 className="entry-title"></h2>
        <p className="trip-dates"></p>
        <p className="entry-text"></p>
      </div>
    </article>
  )
}