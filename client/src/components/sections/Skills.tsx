import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  SiReact, 
  SiNodedotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFlask,
  SiMysql
} from "react-icons/si";
import { SiPython, SiOpenjdk } from "react-icons/si"; //Added this line

// Custom icons as base64 strings for better performance
const pythonLogo = "/assets/P.png";
const javaLogo = "/assets/J.jpeg";

const skills = [
  { name: "React", icon: SiReact, color: "text-blue-500", isCustomIcon: false },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500", isCustomIcon: false },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", isCustomIcon: false },
  { name: "Python", icon: pythonLogo, color: "text-yellow-500", isCustomIcon: true },
  { name: "Java", icon: javaLogo, color: "text-red-500", isCustomIcon: true },
  { name: "C++", icon: SiCplusplus, color: "text-blue-700", isCustomIcon: false },
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500", isCustomIcon: false },
  { name: "CSS3", icon: SiCss3, color: "text-blue-400", isCustomIcon: false },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", isCustomIcon: false },
  { name: "Flask", icon: SiFlask, color: "text-gray-700", isCustomIcon: false },
  { name: "SQL", icon: SiMysql, color: "text-blue-400", isCustomIcon: false },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500", isCustomIcon: false },
];

type SkillIconProps = {
  skill: {
    name: string;
    icon: any;
    color: string;
    isCustomIcon: boolean;
  };
};

const SkillIcon = ({ skill }: SkillIconProps) => {
  if (skill.isCustomIcon) {
    return (
      <img 
        src={skill.icon} 
        alt={`${skill.name} logo`}
        className="w-12 h-12 object-contain"
      />
    );
  }

  const Icon = skill.icon;
  return <Icon className={`w-12 h-12 ${skill.color}`} />;
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6 flex flex-col items-center">
                  <SkillIcon skill={skill} />
                  <h3 className="font-medium mt-4">{skill.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}