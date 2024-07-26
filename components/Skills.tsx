"use client"

import React from "react"
import { headerLanguageMap, skillsData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useLocale } from "next-intl"

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

export default function Skills() {
  const { ref } = useSectionInView("Skills")
  const activeLocale = useLocale()
  return (
    <section
      id="skills"
      ref={ref}
      className=" max-w-[53rem] scroll-mt-28 text-center mb-28"
    >
      <SectionHeading>
        {" "}
        {activeLocale === "ru"
          ? headerLanguageMap["Skills"]
          : "My Skills"}
      </SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-full px-5 py-3 text-gray-700 hover:text-gray-950 dark:bg-white/10 dark:text-white/80 hover:dark:bg-white/20"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            whileHover={{
              scale: 1.10,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
