import "./CV.css"

const CV = () => {
    return(
        <div className="CV">
            <h2>CV</h2>
            <img className="CV__cv" src="./images/cv.jpg" alt="cv mauro sanchez matamoros"/>
            <a href="./images/cv.jpg" download={"CV Mauro Sanchez Matamoros"}><img className="CV__svg" src="./svg/download.svg" alt="download"/></a>
            <span>Download</span>
        </div>
    )
}

export default CV