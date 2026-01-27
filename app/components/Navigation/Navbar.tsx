'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import {FaWindowClose, FaBars} from "react-icons/fa";
const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Resume', href: '#resume' },
    { name: 'Case Studies', href: '#case-study' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Organizations', href: '#organizations'}
  ]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="absolute inset-x-0 top-0 z-50 bg-gray-dark text-light flex flex-col items-center">
          <nav aria-label="Main navigation" className="flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-yellow"
              >
                <span className="sr-only">Open main menu</span>
                <FaBars aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 hover:text-yellow">
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm bg-gray-dark text-yellow">
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-yellow"
                >
                  <span className="sr-only">Close menu</span>
                  <FaWindowClose aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-soft">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light hover:bg-blue hover:text-light"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
    )
}