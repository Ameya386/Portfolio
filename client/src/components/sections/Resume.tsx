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
          className="text-3xl font-bold text-center mb-12"
        >
          Resume
        </motion.h2>
        <Card>
          <CardContent className="p-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-center mb-8">
                Download my resume to learn more about my experience and qualifications.
              </p>
              <div className="flex justify-center">
                <Button size="lg" asChild>
                  <a href="/path-to-your-resume.pdf" download>
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
