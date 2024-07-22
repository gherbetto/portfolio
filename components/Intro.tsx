"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa"
import Link from "next/link"
import { useLocale } from "next-intl"
import { useSectionInView } from "@/lib/hooks"
import { useActiveSectionContext } from "@/context/action-section-context"
import { useTranslations } from "next-intl"


export default function Intro() {
  const { ref } = useSectionInView("Home")
  const activeLocale = useLocale()
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  const t = useTranslations("IntroSection")

  return (
      <section
          ref={ref}
          className="mb-10 max-w-[50rem] text-center sm:mb-0 scroll-mt-28 pt-[7rem]"
          id="home"
      >
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{type: "tween", duration: 0.2}}
            >
              <Image
                  src="/profile.jpg"
                  alt="developer-image"
                  width="250"
                  height="250"
                  quality="95"
                  priority={true}
                  className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              />
            </motion.div>

            <motion.span
                className="absolute right-0 bottom-0 text-4xl"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  delay: 0.2,
                  duration: 0.7,
                }}
            >
              👋
            </motion.span>
          </div>
        </div>
        <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
        >
          {activeLocale === "en" && (
              <p className="font-semibold"> {t("hello_im")} {t("name")}<span className="text-cyan-500"> {t("occupation")}</span> {t("short_intro")}</p>
          )}
          {activeLocale === "ru" && (
              <div className="font-semibold">

                <p className="font-semibold"><span>{t("hello_im")}</span> Меня зовут {t("name")}.</p>
                <p className="font-semibold"><span
                    className="text-cyan-500"> {t("occupation")}</span> {t("short_intro")}</p>
              </div>
          )}
        </motion.h1>

        <motion.div
            className="flex flex-col sm:flex-row items-center justify-center  gap-3 px-4 text-lg font-medium"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{
              delay: 0.1,
            }}
        >
          <Link
              href="#contact"
              onClick={() => {
                setActiveSection("Contact")
                setTimeOfLastClick(Date.now())
              }}
              className="bg-white py-2 px-3 text-sm text-gray-700 flex items-center gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          >
            {t("contact_me")}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
          </Link>
          <a
              href={
                activeLocale == "en" ? "/dmitrii-en-resume.pdf" : "/dmitrii-ru-resume.pdf"
              }
              download={true}
              className=" bg-white py-2 px-3 text-sm text-gray-700 flex items-center gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          >
            {t("download_cv")}
            <HiDownload/>
          </a>
          <a
              className="bg-white p-2 text-md text-gray-700 flex items-center gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://www.linkedin.com/in/dmitrii-gherastovschi/"
              target="_blank"
          >
            <BsLinkedin/>
          </a>

          <a
              className="bg-white p-2 text-md text-gray-700 flex items-center gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://github.com/gherbetto"
              target="_blank"
          >
            <FaGithubSquare/>
          </a>
        </motion.div>
      </section>
  )
}
