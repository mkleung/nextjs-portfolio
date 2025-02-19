import "./hero.scss"
import mylogo from '../../assets/img/mike.jpeg'

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <div className="textContainer">
                <h2>Michael Leung</h2>
                <h1>Front End Developer</h1>
                <div className="buttons">
                    <button>See my work</button>
                    <button>Contact Me</button>
                </div>
                <img src="/scroll.png" alt="" />
            </div>
        </div>

        <div className="slidingTextContainer">
            Design Code Ship
        </div>

        <div className="imageContainer">
            <img src={mylogo} alt="mike" />
        </div>
        
    </div>
  )
}

export default Hero