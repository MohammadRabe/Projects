
const TrackCard = ({ trackName, oppositeText, count }) => {
    return (
        <div className="card-column col-12 col-md-6 col-lg-4">
            <div className="track-card" style={{
                backgroundColor: `${count % 2 == 1 ? '#6c6c6ae8' : '#3a3a39'}`
                }}>
                <span>{trackName}</span>
            </div>
            <div className="opposite-card" style={{
                backgroundColor: `${count % 2 != 1 ? '#6c6c6ae8' : '#3a3a39'}`
                }}>
                <span>
                    {oppositeText}
                </span>
            </div>
        </div>

    )
}

export default TrackCard