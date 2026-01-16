import { motion } from "framer-motion";
import { sections } from "../data/sections";
import { sectionVariants, titleVariants } from "../utils/animations";
import { useState } from "react";
import { FadeInSection } from "../utils/FadeInSection";

export const AboutSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <div className="space-y-6">
            {sections.map((section, index) => (
                <FadeInSection key={section.title}>
                    <motion.section
                        className="space-y-1 rounded-xl overflow-hidden cursor-default"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.5,
                            scale: hoveredIndex === index ? 1.02 : 1
                        }}
                        transition={{
                            duration: 0.3,
                            delay: index * 0.1
                        }}
                    >
                        <motion.div
                            className="grid grid-cols sm:grid-cols-[130px_1fr] gap-1 sm:gap-4 cursor-default"
                            variants={sectionVariants}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            style={{
                                transformOrigin: "center left"
                            }}

                        >
                            <motion.h2
                                className="text-lg font-semibold pt-4 cursor-default"
                                variants={titleVariants}

                            >
                                {section.title}

                            </motion.h2>
                            {section.title === "Timeline" ? (
                                <div className="relative pl-4 pt-4">
                                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700">{section.content}</div>
                                </div>
                            ) : (
                                <motion.div
                                    className="transition-all p-4 sm:p-4 cursor-default"
                                    initial={false}
                                    animate={{ y: 0 }}
                                >
                                    {section.content}
                                </motion.div>
                            )}


                        </motion.div>

                    </motion.section>
                </FadeInSection>
            ))}
        </div>
    )
}