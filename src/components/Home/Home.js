import React from 'react'
import Typical from "react-typical"
import "./Home.css"

const Home = ({ metaData }) => {
    return (
        <div id="landing" className="home">
            <div className="home__text">
                <h1>Hi! I’m Keithan</h1>
                <div className="typical__text">
                    <h2>I'm a {" "}
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                'Web Developer‍',
                                1000,
                                'UX/UI designer',
                                1000,
                                'Gamer',
                                500
                            ]}
                        />
                    </h2>
                </div>

                <p>I'm the Front-End Web Developer based in Cape Town, South Africa. I have great interest in UI design and creating intuitive, dynamic user experiences.</p>

                <div className="links">
                     <a href="https://github.com/KeithanPhilander" target="_blank" rel="noopener noreferrer">Github Profile</a>
                </div>
            </div>

            <div className="home__image">
                <img src={metaData.mainImage} alt="illustration" />
            </div>
        </div>
    )
}

export default Home
