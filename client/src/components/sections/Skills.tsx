
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
  SiMysql,
  SiPython,
  SiIntellijidea,
  SiAnaconda,
  SiFigma,
  SiCanva,
} from "react-icons/si";
import { FaJava, FaWindows } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

const skills = [
  { name: "React", icon: SiReact, color: "text-blue-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "Java", icon: FaJava, color: "text-red-500" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-700" },
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Flask", icon: SiFlask, color: "text-gray-700" },
  { name: "SQL", icon: SiMysql, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
];

const tools = [
  { name: "VS Code", icon: VscCode, color: "text-blue-500" },
  { name: "IntelliJ IDEA", icon: SiIntellijidea, color: "text-pink-500" },
  { name: "Anaconda", icon: SiAnaconda, color: "text-green-500" },
  { name: "Figma", icon: SiFigma, color: "text-purple-500" },
  { name: "Canva", icon: SiCanva, color: "text-blue-400" },
  { name: "Windows", icon: FaWindows, color: "text-blue-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glowing-card">
                <CardContent className="p-6 flex flex-col items-center">
                  <skill.icon className={`w-12 h-12 ${skill.color}`} />
                  <h3 className="font-medium mt-4">{skill.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent"
        >
          Tools Used
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glowing-card">
                <CardContent className="p-6 flex flex-col items-center">
                  <tool.icon className={`w-12 h-12 ${tool.color}`} />
                  <h3 className="font-medium mt-4">{tool.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
