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
                <section className="space-y-4">
                    <motion.div
                        className="text-2xl sm:text-3xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <TypeAnimation
                            sequence={[
                                'hello, allan here!'
                            ]}
                            wrapper="h1"
                            cursor={true}
                            repeat={0}
                            speed={50}
                            style={{ display: "inline-block" }}
                        />
                    </motion.div>
                    <motion.p
                        className="text-sm sm:text-base leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        your average boba enjoyer from socal trying to get a fucking grip
                    </motion.p>
                </section>
            </FadeInSection>

            {/* <FadeInSection>
            <section>
                <div>

                </div>
            </section>
        </FadeInSection> */}

            <FadeInSection delay={0.4}>
                <motion.section className="mt-4">
                    <div>
                        <SpotifyPlaying />
                    </div>
                </motion.section>
            </FadeInSection>



        </div>


    )
}



export default Home;