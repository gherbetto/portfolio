"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io"

export default function SectionDivider() {
  return (
    <motion.div
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{
          delay: 0.1,
        }}
    >
      <Link href="#about" className="mt-12 mb-20 hidden sm:block bg-white p-2 text-md text-gray-700 flex items-center gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60" >
        <IoIosArrowDown className="opacity-70 group-hover:translate-x-1 transition" />
      </Link>
    </motion.div>
  )
}
