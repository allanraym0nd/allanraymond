import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import SpotifyPlaying from '../components/SpotifyPlaying';
import { usePageTitle } from '../hooks/usePageTitle';
import { FadeInSection } from '../utils/FadeInSection';

const Home = () => {
    usePageTitle('')

    return (
        <div>
            <FadeInSection>
                <section>
                    <div>
                        <TypeAnimation />
                    </div>
                    <p>
                        your average boba enjoyer from socal trying to get a fucking grip
                    </p>
                </section>
            </FadeInSection>

            {/* <FadeInSection>
            <section>
                <div>

                </div>
            </section>
        </FadeInSection> */}

            <FadeInSection>
                <section>
                    <div>
                        <SpotifyPlaying />
                    </div>
                </section>
            </FadeInSection>



        </div>


    )
}



export default Home;