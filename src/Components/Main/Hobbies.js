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
                    <p>Fortunately, I am not a work machine, I combine studies, job, household chores with entertainement. And so then, I would like to show you some of my prefered activities...</p>
                    <p>I have a group of incredible friends who I studied with since kindergarden, we frequently get together to have big meals or for bithdays. It helps us a lot to disconnect from the routine. Many times I cook for them, it is something that makes me feel very confortable and I really enjoy it.</p>
                    <p>One of my favourite passions is football, I practised it since I was a kid and I still play it every weekend in different amateur tournements. My body can't resist like some years ago but I could'n imagine not doing it. I often go to the Huracán's stadium to watch a football match and encourage my team.</p>
                    <p>As far as I am concerned, most people would share with me the taste for travelling. Although many times money is an impediment, my girlfriend and I, try to visit as many places as we can. I believed Argentina is one of the most rich country regarding landscapes.</p>
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