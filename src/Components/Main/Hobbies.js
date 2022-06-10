import { useContext } from "react"
import LanguageContext from "../../Context/LanguageContext"
import "./Hobbies.css"

const Hobbies = () => {

    const {language} = useContext(LanguageContext)
    
    return(
        <div className="Hobbies">
            <h2>{language==="en"?"My Hobbies":language==="es"?"Mis hobbies":"LanguageError"}</h2>
            <div className="Hobbies__container">
                <div className="Hobbies__photos">
                    <img src="./images/hobbies/amigos.jpg" alt="" />
                    <img id="rotateLeft" src="./images/hobbies/amigos2.jpg" alt="" />
                    <img src="./images/hobbies/viajar.jpg" alt="" />
                    <img id="rotateLeft" src="./images/hobbies/snowboard.jpg" alt="" />
                </div>
                {language==="en"?
                <div className="Hobbies__text">
                    <p>I have a group of incredible friends who I studied with since kindergarten. We frequently get together to share big meals or to celebrate our bithdays. These meetings are a breath of fresh air and help us to disconnect from the routine. I often cook for them, which makes me feel quite comfortable and I really enjoy it.</p>
                    <p>One of my passions is football, I've practiced it since I was a kid and I still do it every weekend in different amateur tournements. I often go to Huracán's stadium to watch football matches and cheer for my team. In addition, I have been a member of the online football manager "Hattrick" for many years.</p>
                    <p>Like many people, I have a taste for travelling. Regardless of the high costs involved, my girlfriend and I always try to visit as many places as possible. I strongly believe that Argentina is one of the richest countries respecting landscapes.</p>
                </div>
                :
                language==="es"?
                <div className="Hobbies__text">
                    <p>Tengo un grupo de amigos excepcionales a los que conozco desde jardín de infantes. De vez en cuando nos juntamos a compartir una comida o a celebrar algún cumpleaños. Estos encuentros son de una gran ayuda para desconectarse del estrés de la rutina. A veces, suelo cocinarles, es algo que disfruto mucho hacer y me reconforta.</p>
                    <p>Una de mis grandes pasiones es el fútbol, lo practico desde que soy un niño y aún sigo jugando en torneos amateur los fines de semana. A menudo voy a la cancha a ver a Huracán, el club del que soy hincha, al igual que mi mamá y mi abuelo. Como si fuera poco, también formo parte de la comunidad de "Hattrick" desde hace varios años, un juego de manager online.</p>
                    <p>Estoy seguro de que la mayoría de las personas comparten mi gusto por viajar. A pesar de los altos costos que involucra, junto con mi pareja tratamos de visitar la mayor cantidad de lugares posibles, son experiencias muy enriquesedoras. Estoy convencido de que Argentina es uno de los países más ricos en cuanto a paisajes.</p>
                </div>
                : "LanguageError"}
                <div className="Hobbies__photos2">
                    <img src="./images/hobbies/huracan.jpg" alt="" />
                    <img id="rotateLeft" src="./images/hobbies/futbol4.jpg" alt="" />
                    <img src="./images/hobbies/futbol.jpg" alt="" />
                    <img id="rotateLeft" src="./images/hobbies/futbol3.jpg" alt="" />
                    <a id="ht__link" href="http://www.hattrick.org" target="_blank" rel="noopener noreferrer">
                        <img id="ht" src="./images/hobbies/htlogo.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hobbies