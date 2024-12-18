'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, FileText, Grid, Moon, Sun, Upload, Zap } from 'lucide-react'
import Link from "next/link"

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 border-b ${darkMode ? 'border-gray-700 bg-gray-900/50' : 'border-gray-200 bg-white/50'} backdrop-blur-xl`}>
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link className={`flex items-center gap-2 font-bold ${darkMode ? 'text-white' : 'text-black'}`} href="#">
              <Zap className="h-6 w-6" />
              <span>ConvertPro</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              {[
              { name: 'Features', href: './features' },
              { name: 'Pricing', href: '/pricing' },
              { name: 'Tools', href: '/tools' },
              { name: 'About', href: './about' }
              ].map((item) => (
              <Link 
                key={item.name} 
                className={`text-sm ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`} 
                href={item.href}
              >
                {item.name}
              </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-200 text-gray-800'}`}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link
              className={`hidden sm:inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium ${
                darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'
              }`}
              href="/features"
            >
              Start Converting
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative pt-32 md:pt-40 ${darkMode ? 'text-white' : 'text-black'}`}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative">
          <div className="container flex flex-col items-center text-center">
            <div className={`rounded-full ${darkMode ? 'bg-gray-800 text-purple-400' : 'bg-gray-200 text-purple-600'} px-3 py-1 text-sm backdrop-blur`}>
              30+ File Formats Supported
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold md:text-6xl lg:text-7xl">
              TRANSFORM YOUR
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                {" "}
                FILES
              </span>
            </h1>
            <p className={`mt-4 max-w-2xl text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Convert any file format instantly. PDF, DOCX, XLS, CSV, and 30+ more formats supported.
              Professional-grade conversions with our advanced AI technology.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link 
              href="/convert"
              className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium ${darkMode ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-purple-600 text-white hover:bg-purple-700'}`}>
              Start Converting Now
              <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
              href="/features"
              className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
              View All Features
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-700/30 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Features Grid */}
      <section className={`relative py-24 ${darkMode ? 'text-white' : 'text-black'}`}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Conversion Features</h2>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Everything you need for perfect file conversions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <feature.icon className="h-12 w-12 mb-4 text-purple-400" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* File Format Section */}
      <section className={`relative py-24 ${darkMode ? 'bg-gradient-to-b from-gray-900 to-purple-900/20' : 'bg-gradient-to-b from-white to-purple-100/20'}`}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Supported File Formats</h2>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Convert to and from any of these formats instantly</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {formats.map((format, index) => (
              <div
                key={index}
                className={`flex items-center justify-center p-4 rounded-lg ${
                  darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'
                }`}
              >
                <FileText className="h-6 w-6 mr-2 text-purple-400" />
                <span>{format}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`relative py-24 ${darkMode ? 'text-white' : 'text-black'}`}>
        <div className="container">
          <div className={`relative overflow-hidden rounded-2xl ${darkMode ? 'bg-gradient-to-r from-purple-900 to-purple-600' : 'bg-gradient-to-r from-purple-100 to-purple-300'} px-6 py-20 sm:px-12 sm:py-28 md:px-20`}>
            <div className="relative flex flex-col items-center max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Files?</h2>
              <p className={`text-lg mb-8 ${darkMode ? 'text-purple-200' : 'text-purple-800'}`}>
                Join thousands of users who trust our platform for their file conversion needs.
              </p>
              <button className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-lg font-medium ${
                darkMode ? 'bg-white text-purple-900 hover:bg-gray-200' : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}>
                Get Started for Free
                <Upload className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="absolute -top-24 -right-24 h-64 w-64 bg-purple-400/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 bg-purple-700/30 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${darkMode ? 'border-gray-700 text-white' : 'border-gray-200 text-black'} py-12`}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Product', 'Company', 'Resources', 'Legal'].map((section) => (
              <div key={section}>
                <h3 className="font-bold mb-4">{section}</h3>
                <ul className="space-y-2">
                  {['Features', 'Pricing', 'Enterprise'].map((item) => (
                    <li key={item}>
                      <Link href="#" className={darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} ConvertPro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Convert files in seconds with our optimized processing engine",
  },
  {
    icon: Grid,
    title: "Batch Processing",
    description: "Convert multiple files simultaneously with bulk processing",
  },
  {
    icon: FileText,
    title: "Format Retention",
    description: "Maintain formatting, styles, and layout in converted files",
  },
  {
    icon: Upload,
    title: "Cloud Storage",
    description: "Securely store and access your converted files from anywhere",
  },
  {
    title: "Advanced AI",
    icon: Zap,
    description: "Smart conversion with AI-powered format detection and optimization",
  },
  {
    title: "Enterprise Ready",
    icon: Grid,
    description: "Scale your conversions with our enterprise-grade infrastructure",
  },
]

const formats = [
  "PDF", "DOCX", "XLS", "CSV", "PPT", "JPG",
  "PNG", "SVG", "MP4", "MP3", "ZIP", "RAR",
]