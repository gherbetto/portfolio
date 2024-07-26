"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "ru" ? (
        // <p>{t("desc_ru")}</p>
        <div className="flex flex-col gap-2">
          <p>
            Привет! Меня зовут Дмитрий Герастовски, мне 30 лет, и я начал свой путь в веб-разработке как самоучка, и с тех пор разрабатываю интерфейсы, которые превращают идеи в реальность. Я стремлюсь создавать уникальные решения, которые не только решают задачи клиентов, но и увлекают пользователей.
            </p>
          <p>
            На протяжении восьми лет я жил в США, где приобрёл бесценный международный опыт, погружаясь в мир технологий и инноваций. Этот опыт помог мне не только приобрести ценные навыки в разработке, но и расширить взгляд на международные тренды и подходы. В последние два года я вернулся в Россию, где продолжаю развивать свои навыки и стремлюсь стать еще более компетентным разработчиком.
          </p>
          <p>
            Моя страсть к технологиям не ограничивается лишь кодом. Я всегда в поиске нового, ведь мир IT стремительно развивается, и я собираюсь идти в ногу с ним. Мне нравится балансировать между функциональностью и эстетикой, создавая удобные и привлекательные решения для пользователей.
          </p>
          <p>
            В свободное время люблю кататься на лонгборде, что позволяет мне наслаждаться активным образом жизни и находить баланс между работой и отдыхом. Ничто так не вдохновляет, как свежий воздух и свобода движения.
            </p>
          <p>
            Моя цель — создавать продукты, которые будут менять мир к лучшему. Я верю в силу технологий и их влияние на жизни людей. Если вы ищете талантливого и увлеченного разработчика, который готов взять на себя новые вызовы и быстро учиться, вы попали по адресу.
          </p>
          <p>Давайте создадим что-то невероятное вместе!</p>
        </div>
      ) : (
          <p>{t("desc")}</p>
        // <>
        //   <p className="mb-3">
        //     This is just a regular description of a guy that likes to make websites, and i try to get a job at a cool company like
        //     <span className="font-medium italic">
        //       {" "}
        //       Ackermans Dealers
        //     </span> at {}
        //     <span className="italic underline">
        //       <a
        //         href="https://ackermanbuick.com"
        //         target="_blank"
        //       >
        //
        //       </a>
        //     </span>{" "}
        //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias laborum quo repellat similique. A accusamus dolor eveniet harum itaque maxime nisi tempora voluptatem! Ad alias enim facere velit vero.{" "}
        //     <a
        //       href="https://test.com"
        //       target="_blank"
        //       className="italic underline"
        //     >
        //       Test.{" "}
        //     </a>
        //     Lorem ipsum dolor sit amet.
        //     <span className="font-medium italic">
        //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, necessitatibus.
        //     </span>
        //   </p>
        //
        //   <p className="mb-3">
        //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque hic ipsum perferendis porro quibusdam tenetur ut voluptates? Deleniti dicta dolorem, inventore odit perferendis ratione sit.{" "}
        //     <span className="italic underline">
        //       <a href="https://test.com" target="_blank">
        //         {" "}
        //         Test.
        //       </a>
        //     </span>{" "}
        //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cum cupiditate error fugiat, harum itaque molestias nam odit officiis ratione recusandae sapiente suscipit tempore voluptate?
        //   </p>
        //
        //   <p className="mb-3">
        //     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        //     <span className="font-medium italic"> Lorem ipsum dolor.</span> at the{" "}
        //     <span className="italic underline">
        //       <a href="https://test.com/" target="_blank">
        //         Lorem ipsum dolor.{" "}
        //       </a>
        //     </span>
        //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ratione.
        //     <span className="font-medium italic"> React, Next.js and Vue</span>,
        //     and have a solid understanding of{" "}
        //     <span className="font-medium italic">
        //       JavaScript, TypeScript and HTML/CSS
        //     </span>
        //     .{" "}
        //   </p>
        // </>
      )}
    </motion.section>
  )
}
