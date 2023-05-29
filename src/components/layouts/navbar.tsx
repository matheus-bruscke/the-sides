"use client"

import Image from "next/image";
import Link from "next/link";
import Button from "../common/button";
import { MoonStar } from "lucide-react"
import { usePathname } from "next/navigation"
import { cx } from "class-variance-authority";

const pages = [
  { href: "/geek", label: "Geek" },
  { href: "/tech", label: "Tech" },
  { href: "/life", label: "Life" }
]

export default function NavBar() {
  const path = usePathname()

  console.log(path)

  return (
    <header className="w-full h-20 grid grid-cols-4 gap-4">
      <span className="col-span-1 w-full h-full flex items-center justify-start">
        <Image src="the-sides-dark.svg" height={36} width={74} alt="The Sides" />
      </span>

      <nav className="col-span-2 w-full h-full flex items-center justify-center">
        <ul className="flex items-center justify-center">
          {pages.map(i => (
            <li
              key={i.href}
              className={cx(
                "h-9 w-14 transition-all flex items-center justify-center py-1 px-3 rounded hover:text-cod-gray-300 cursor-pointer",
                path === i.href && "bg-cod-gray-900"
              )}
            >
              <Link href={i.href}>{i.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <section className="col-span-1 w-full h-full flex items-center justify-end gap-8">
        <span className="h-9 p-1 rounded bg-cod-gray-800 flex items-center text-sm">
          <button className="w-7 h-7 bg-transparent text-gray-100 rounded-[inherit]">Pt</button>
          <button className="w-7 h-7 bg-cod-gray-500 text-gray-100 text-cod rounded-[inherit]">En</button>
        </span>

        <Button shape="square"><MoonStar size={18} /></Button>
      </section>
    </header>
  )
}