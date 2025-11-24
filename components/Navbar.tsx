"use client"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur bg-white/70">
      <div className="flexBetween max-container padding-container py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl text-green-50">HiNaija</span>
        </Link>

        <ul className="hidden h-full gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 transition-colors hover:text-green-50"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="hidden lg:flex">
          <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
        </div>

        <button
          aria-label="Open menu"
          className="inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-gray-10/50 bg-white/60 backdrop-blur lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <Image src="/menu.svg" alt="menu" width={24} height={24} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="max-container padding-container pb-6">
            <div className="rounded-2xl bg-white/90 backdrop-blur shadow-xl ring-1 ring-gray-10/60">
              <ul className="flex flex-col divide-y divide-gray-10/50">
                {NAV_LINKS.map((link) => (
                  <Link
                    href={link.href}
                    key={link.key}
                    className="regular-16 text-gray-90 px-6 py-3 hover:text-green-50"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
              <div className="p-4">
                <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" full />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar