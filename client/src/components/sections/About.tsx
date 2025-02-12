import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <Card>
          <CardContent className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <p>
                I'm a passionate full-stack developer with over 5 years of experience
                building web applications. I specialize in React, Node.js, and
                modern web technologies.
              </p>
              <p>
                My journey in software development began when I built my first
                website in college. Since then, I've worked with various startups
                and enterprises, helping them create robust and scalable solutions.
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
