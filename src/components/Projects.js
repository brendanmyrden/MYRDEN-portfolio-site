// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import inheritance from '../assets/inheritance.png';
import reefergames from '../assets/reefergames.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>REEFER.GAMES</h3>
                    <img src={reefergames} alt="Uniswap Swap Page" />
                    <p>Designed within the invaluable team of FISIDI creators, the web 3.0 project REEFER.GAMES conquers new territory while simultaneously branching what we understand to be blockchain gaming. The novelty of the NFT experience has only begun, we
                    </p>

                    <a href="https://uniswap.org/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Uniswap/v2-core" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Compound</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
                    </p>

                    <a href="https://compound.finance/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/compound-finance/compound-protocol" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>INHERITANCE EP</h3>
                    <img src={inheritance} alt="Aave Landing Page" />
                    <p>Expanding the repitore of sounds in our earth, Inheritance is a melding of ground-rattling music production with subtle lyrical coding. Developped over 3 years, this sound design experience is sure to have you moving, thinking, and most of all growing as a creator - for that is the reason it exists.


                    </p>

                    <a href="https://aave.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;