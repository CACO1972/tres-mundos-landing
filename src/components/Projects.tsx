
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projectData = [
  {
    id: 1,
    title: "ImplantDX",
    description: "Evaluación clínica con IA",
    bgClass: "from-black to-gray-900",
  },
  {
    id: 2,
    title: "ReVive.AI",
    description: "Orientación estética y diagnóstica automatizada",
    bgClass: "from-black to-gray-900",
  },
  {
    id: 3,
    title: "The Human Upgrade",
    description: "Ecosistema de mejora personal y clínica",
    bgClass: "from-black to-gray-900",
  },
  {
    id: 4,
    title: "MOVA Motorsport",
    description: "Neurocognición aplicada al automovilismo",
    bgClass: "from-black to-gray-900",
  },
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projectData.map((project) => (
        <Card 
          key={project.id} 
          className="border-gray-800 bg-gradient-to-br hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-300 hover:border-gold/30 hover:translate-y-[-5px]"
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-light text-gold">
              {project.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-white/80 text-base">
              {project.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
