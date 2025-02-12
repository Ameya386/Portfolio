import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  SiReact, 
  SiNodedotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiPython,
  SiSpring,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFlask,
  SiMysql
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, color: "text-blue-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "Java", icon: SiSpring, color: "text-red-500" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-700" },
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Flask", icon: SiFlask, color: "text-gray-700" },
  { name: "SQL", icon: SiMysql, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
];

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
                  <skill.icon className={`w-12 h-12 ${skill.color} mb-4`} />
                  <h3 className="font-medium">{skill.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}