"use client";

import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  // FIX: Add 'id' property to allow passing it to the section element for anchor linking.
  id?: string;
}

export default function AnimatedSection({ children, className, delay = 0.2, id }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.section>
  );
}
