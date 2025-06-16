import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects =[
    {
        id: 1,
        title: "Parkison's Detection Model",
        description: "A research project to help determine significant features in audio that can contribute to increased performance of machine learning models to detect Parkinson's Disease.",
        image: '/projects/MFCC.png',
        tags: ['Python', 'Pytorch', 'TensorFlow', 'CNN', "SVM", 'Matplotlib'],
        url: 'ss.com',
        github: 'ss.com'
    },
    {
        id: 2,
        title: "Miami CTF",
        description: 'Created a custom capture the flag event for the Miami Cyber Security club and fellow students. Learned and implemented cyber security subsections into challenges ranging from medium to hard.',
        image: '/projects/CTF.png',
        tags: ['HTML/CSS', 'Docker', 'Forensics', 'Server Management', 'PHP', 'JavaScript', 'MySQL'],
        url: 'ss.com',
        github: 'ss.com'
    },
    {
        id: 3,
        title: "Financial Predictor",
        description: 'Building a machine learning model to help predictor future sales for companies.',
        image: '/projects/Prediction.png',
        tags: ['Python', 'Pytorch', 'TensorFlow'],
        url: 'ss.com',
        github: 'ss.com'
    }
];

export const ProjectSection = () => {
    return (
        <section id='projects' className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-12xl mx-auto">
                    Here are some of my recent projects. Each project I am proud to put on display for the time and dilegence that went into their creation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4"> 
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2"> {project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4"> {project.description}</p>
                            <div className="flex justify-between items-center"> 
                                <div className='flex space-x-3'>
                                    <a href={project.url} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={project.github} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a  href='https://github.com/SamLothrop' target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check My GitHub <ArrowRight sixe={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
};