import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/yourusername",
    color: "hover:text-[#333]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/yourusername",
    color: "hover:text-[#0077b5]",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/yourusername",
    color: "hover:text-[#1DA1F2]",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:your.email@example.com",
    color: "hover:text-[#EA4335]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/yourusername",
    color: "hover:text-[#E4405F]",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 gradient-text"
        >
          Let's Connect
        </motion.h2>
        <Card className="backdrop-blur-sm bg-background/30">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 transition-all duration-300 hover:scale-110"
                  >
                    <link.icon 
                      className={`w-8 h-8 transition-colors duration-300 ${link.color}`}
                    />
                    <span className="mt-2 text-sm font-medium text-muted-foreground group-hover:text-foreground">
                      {link.name}
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}