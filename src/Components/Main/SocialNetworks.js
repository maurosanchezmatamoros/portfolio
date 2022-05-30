import "./SocialNetworks.css"

const SocialNetworks = () => {
    return(
        <>
            <h3 className="SocialNetworks__h3">Social networks</h3>
            <div className="SocialNetworks__svg">
                <a href="https://www.linkedin.com/in/maurosanchezmatamoros/" target="_blank" rel="noopener noreferrer">
                    <img src="./svg/linkedin.svg" alt="linkedin"/>
                </a>
                <a href="mailto:maurosanchezmatamoros@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src="./svg/gmail.svg" alt="gmail"/>
                </a>
                <a href="https://wa.me/+5491154612423/?text=Hello Mauro..." target="_blank" rel="noopener noreferrer">
                    <img src="./svg/whatsapp.svg" alt="whatsapp"/>
                </a>
                <a href="https://www.instagram.com/smmauro/" target="_blank" rel="noopener noreferrer">
                    <img src="./svg/instagram.svg" alt="instagram"/>
                </a>
                <a href="https://www.facebook.com/smmauro" target="_blank" rel="noopener noreferrer">
                    <img src="./svg/facebook.svg" alt="facebook"/>
                </a>
                <a href="https://twitter.com/smmauro" target="_blank" rel="noopener noreferrer">
                    <img src="./svg/twitter.svg" alt="twitter"/>
                </a>
            </div>
        </>
    )
}

export default SocialNetworks