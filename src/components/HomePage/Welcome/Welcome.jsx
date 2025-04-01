import welcomeVideo from "../../../assets/welcomeBackgroundVideo.mp4"
import "./Welcome.css";

const Welcome = () => {
    return(
        <>
            <div className="video-container">
                <video autoPlay loop muted className="background-video">
                <source src={welcomeVideo} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>

            <div className="video-overlay">
                <h1>smmart – True school for entrepreneurs.</h1>
                <button>Start now</button>
            </div>
            helloo
        </>
    )
}

export default Welcome