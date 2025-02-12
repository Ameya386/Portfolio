
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent"
        >
          Resume
        </motion.h2>
        <Card>
          <CardContent className="p-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-center mb-8 text-foreground">
                Download my resume to learn more about my experience and qualifications.
              </p>
              <div className="flex justify-center">
                <Button size="lg" asChild>
                  <a 
                    href="/assets/resume.pdf" 
                    download="Ameya_Kamble_Resume.pdf"
                    type="application/pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileDown className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
