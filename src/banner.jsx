import "./banner.css"
const bannerUrl = "https://illustoon.com/photo/9964.png"

const Banner = () => {
    return (
        <div className="banner">
            <img id="banner" alt="banner" src={bannerUrl}/> 
        </div>
    )
}

export default Banner;