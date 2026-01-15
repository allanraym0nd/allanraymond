import { Projects } from "../components/Projects";
import { motion } from "framer-motion";

const Projects = [
    {
        title: "SixthMan",
        description: "FullStack Sports Predictions App with real-time NBA data integration and machine learning predictions ",
        tech: [
            { name: "JavaScript", color: "yellow" },
            { name: "React", color: "cyan" },
            { name: "FastAPI", color: "blue" },
            { name: "Node.js", color: "green" },
            { name: "Express.js", color: "amber" },
            { name: "SckiKit Learn", color: "orange" }

        ],
        link: "https://github.com/allanraym0nd/6man",
        previewImage: ""
    },

    {
        title: "Pastr",
        description: "Cross-platform desktop clipboard manager with real-time system clipboard monitoring and automatic content categorization",
        tech: [
            { name: "TypeScript", color: "blue" },
            { name: "React", color: "cyan" },
            { name: "Electron", color: "white" },
            { name: "Node.js", color: "green" },
            { name: "SQLite", color: "amber" },

        ],
        link: "https://github.com/allanraym0nd/pastr",
        previewImage: ""
    },

    {
        title: "Rehearse",
        description: "Full-stack AI-powered interview preparation platform with real-time voice interaction",
        tech: [
            { name: "TypeScript", color: "blue" },
            { name: "NextJs", color: "neutral" },
            { name: "Supabase", color: "blue" },
            { name: "Docker", color: "green" },
            { name: "Web-Speech API", color: "orange" }


        ],
        link: "https://github.com/allanraym0nd/rehearse",
        previewImage: ""
    }
]

export const sections = [
    {
        title: "Timeline",
        content: (
            <div className="space-y-4 mb-8">
                {[
                    {
                        company: 'Growth Hackers',
                        date: "2025",
                        title: "Data Science Intern",
                        description: ["worked on various projects including automating data pipelines"],
                        dotColor: "bg-blue-500"

                    },
                    {
                        company: "UoN",
                        date: "2024",
                        title: "Network And Systems Support",
                        description: ["gained valuable experience in network management"],
                        dotColor: "bg-amber-300"



                    },
                    {

                    }
                ].map((item) => (
                    <div key={item.company} className="relative">
                        <div
                            className={`relative -left-[17px] top-2 w-[9px] h-[9px] rounded-full ${item.dotColor} ring-4 ring-white dark:ring-gray-900`}
                        >
                            <motion.div>

                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
]