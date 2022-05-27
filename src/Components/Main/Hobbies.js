import "./Hobbies.css"

const Hobbies = () => {
    return(
        <div className="Hobbies">
            <h2>Hobbies</h2>
            <div className="Hobbies__container">
                <div className="Hobbies__photos">
                    <img src="./images/hobbies/amigos.jpg" alt="" />
                    <img id="rotateLeft" src="./images/hobbies/amigos2.jpg" alt="" />
                    <img src="./images/hobbies/viajar.jpg" alt="" />
                    <img id="rotateLeft" src="./images/hobbies/snowboard.jpg" alt="" />
                    <img src="./images/hobbies/cocinar.jpg" alt="" />
                </div>
                <div className="Hobbies__text">
                    <p>Fortunately, I am not a work machine, I combine studies, job, and household chores with entertainement. And so, I would like to show you some of my preferred activities...</p>
                    <p>I have a group of incredible friends who I studied with since kindergarden. We frequently get together to share big meals or to celebrate our bithdays. These meetings are a breath of fresh air and help us to disconect from the routine. Many times I cook for them, what makes me feel very confortable and I really enjoy it.</p>
                    <p>One of my favourite passions is football, I've practiced it since I was a kid and I still do it every weekend in different amateur tournements. My body can't resist like some years ago but I couldn't imagine not doing it. I often go to the Huracán's stadium to watch football matches and cheer my team. In addition, I have been a member of the online football manager "Hattrick" for many years.</p>
                    <p>As far as I am concerned, most people would share the taste for travelling. Regardless of the high costs involved, my girlfriend and I always try to visit as many places as possible. I strongly believe that Argentina is one of the richest countries respecting landscapes.</p>
                </div>
                <div className="Hobbies__photos">
                    <img src="./images/hobbies/huracan.jpg" alt="" />
                    <img id="rotateLeft" src="./images/hobbies/futbol4.jpg" alt="" />
                    <img src="./images/hobbies/futbol.jpg" alt="" />
                    <img id="rotateLeft" src="./images/hobbies/futbol2.jpg" alt="" />
                    <img src="./images/hobbies/futbol3.jpg" alt="" />
                    <a id="ht__link" href="http://www.hattrick.org" target="_blank" rel="noopener noreferrer">
                        <img id="ht" src="./images/hobbies/htlogo.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hobbies