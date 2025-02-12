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
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        <Card>
          <CardContent className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none prose-p:text-foreground"
            >
              <p>
                Hello Everyone,
              </p>
              <p>
                My name is Ameya Kamble, and I am from Maharashtra, India. I am currently in my third year of pursuing a Bachelor of Engineering in Computer Science at Pune University.
              </p>
              <p>
                I have a strong proficiency in classical programming languages such as C++ and Python. My academic and personal interests are centered around building innovative applications, with a particular focus on Artificial Intelligence, Machine Learning, and Web Technologies. I am passionate about leveraging these technologies to create impactful solutions and am eager to contribute to advancements in these fields.
              </p>
              <p>
                Thank you for your time, and I look forward to connecting with like-minded professionals and peers.
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
