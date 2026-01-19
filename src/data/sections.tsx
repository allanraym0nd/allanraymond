import { motion } from 'framer-motion';
import { Project } from '../components/Projects';

const projects = [
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
                ].map((item) => (
                    <div key={item.company + item.date} className="relative">
                        <div
                            className={`absolute -left-[17px] top-2 w-[9px] h-[9px] rounded-full ${item.dotColor} ring-4 ring-white dark:ring-gray-900`}
                        />
                        <motion.div
                            className="group py-1 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            style={{ transformOrigin: 'left' }}
                        >
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                                <p className="font-medium">{item.company}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">{item.date}</p>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 italic">{item.title}</p>
                            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                                {item.description.map((desc, idx) => (
                                    <li key={idx}>{desc}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                ))}
            </div>
        )
    },
    {
        title: "Projects",
        content: (
            <div className="space-y-4">
                {projects.map((project) => (
                    <Project key={project.title} project={project} />
                ))}
            </div>
        )
    },
    {
        title: "Hobbies",
        content: (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {[
                    {
                        title: "YouTube",
                        description: "documenting my life as a software engineer",
                        stats: "19 videos",
                        color: "rose"
                    },
                    {
                        title: "Real Estate Investing",
                        description: "playing monopoly but with real money",
                        stats: "0 properties",
                        color: "blue"
                    },
                    {
                        title: "Stocks and Crypto",
                        description: "buying high and selling low is my philosophy",
                        stats: "-$25,000 profit",
                        color: "green"
                    },
                    {
                        title: "Mechanical Keyboards",
                        description: "fun but will be the reason why im homeless",
                        stats: "3 custom keyboards",
                        color: "purple"
                    },
                ].map((hobby) => (
                    <motion.div
                        key={hobby.title}
                        className="group py-1 transition-colors"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div>
                            <h3 className={`font-medium`}>
                                {hobby.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                {hobby.description}
                            </p>
                            <p className={`text-xs text-${hobby.color}-500 dark:text-${hobby.color}-500 mt-2 font-medium`}>
                                {hobby.stats}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        )
    }
]