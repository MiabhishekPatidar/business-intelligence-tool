'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      setIsDropdownVisible(false)
    }
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownVisible(false)
      }
    }
    window.addEventListener('scroll', onScroll)
    window.addEventListener('click', onClickOutside)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('click', onClickOutside)
    }
  }, [])

  const moduleLinks = [
    { name: 'Financial', link: '/financial' },
    { name: 'HR & People', link: '/hr' },
    { name: 'Security Ops', link: '/security' },
    { name: 'R&D Portfolio', link: '/rnd' },
    { name: 'Supply Chain', link: '/supply-chain' }
  ]

  const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'Modules', link: '#' },
    { name: 'Saved', link: '/saved' },
    { name: 'Contact Us', link: '/contact' }
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-purple-700 shadow-lg' : 'bg-purple-500/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        <div className="flex items-center gap-3">
          <Image src="/wayne_logo.png" alt="Wayne" width={32} height={32} className="rounded" />
          <span className="text-white font-extrabold text-xl tracking-tight">Wayne Insights</span>
        </div>
        <nav className="hidden sm:flex gap-6 text-sm font-semibold relative">
          {navLinks.map((mod) => (
            mod.name === 'Modules' ? (
              <div key={mod.name} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownVisible(!isDropdownVisible)}
                  className={`transition-colors ${
                    pathname === mod.link ? 'text-white underline underline-offset-4' : 'text-white hover:text-purple-200'
                  }`}
                >
                  {mod.name}
                </button>
                {isDropdownVisible && (
                  <div
                    className="absolute left-0 mt-2 w-52 bg-white rounded-md shadow-lg z-50"
                  >
                    {moduleLinks.map((module) => (
                      <Link
                        key={module.name}
                        href={module.link}
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-purple-100"
                      >
                        {module.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={mod.name}
                href={mod.link}
                className={`transition-colors ${
                  pathname === mod.link ? 'text-white underline underline-offset-4' : 'text-white hover:text-purple-200'
                }`}
              >
                {mod.name}
              </Link>
            )
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
