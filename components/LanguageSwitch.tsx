"use client"

import { IoLanguageOutline } from "react-icons/io5"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"

export default function LanguageSwitch() {
  const localActive = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const onChangeLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextLocale = localActive === "en" ? "ru" : "en"
    const newPath = pathname.replace(/^\/(en|ru)/, `/${nextLocale}/`)
    router.replace(newPath, {
      scroll: false,
    })
  }

  return (
    <>
      <button
        onClick={onChangeLanguage}
        className="w-[2.5rem] h-[2.5rem] bg-opacity-80 flex items-center justify-center gap-1 transition-all"
      >
        <span className="sr-only">Change Language</span>
        {/* <IoLanguageOutline /> */}

        <span className="text-sm hover:scale-[1.10] active:scale-105 hover:dark:text-white transition-all">
          {" "}
          {localActive == "en" ? "EN" : "RU"}
        </span>
      </button>
    </>
  )
}
