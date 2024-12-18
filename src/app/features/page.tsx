"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Zap,
  FileText,
  Grid,
  Upload,
  Shield,
  Globe,
  Cpu,
  Smartphone,
  Clock,
  Lock,
  Repeat,
  Sliders,
} from "lucide-react";

export default function FeaturesPage() {
  const [darkMode] = useState(true); // Dark mode enabled by default

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="relative z-10">

        {/* Navigation Bar */}
        <nav className="bg-transparent fixed top-0 w-full z-20 py-4 px-6">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* 3D Logo */}
            <div className="relative flex items-center">
              <Link href="/" className="text-white font-bold text-2xl">
                <div className="logo-3d">ConvertPro</div>
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
              Powerful Features for
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                Every Conversion
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Discover the tools that make ConvertPro the ultimate file
              conversion platform.
            </p>
            <div className="inline-flex rounded-md shadow">
              <Link
                href="#features"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">About ConvertPro</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              ConvertPro is your one-stop platform for all file conversion needs. 
              With state-of-the-art tools, secure processing, and a user-friendly interface, 
              we aim to make every conversion smooth, efficient, and reliable. Whether you are 
              converting documents, images, videos, or audio, ConvertPro delivers the best 
              results every time.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Powerful Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg shadow-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-purple-100">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const features = [
  { icon: Zap, title: "Lightning Fast", description: "Convert files in seconds with our optimized engine." },
  { icon: Grid, title: "Batch Processing", description: "Convert multiple files simultaneously." },
  { icon: FileText, title: "Format Retention", description: "Maintain original formatting and layout." },
  { icon: Upload, title: "Cloud Storage", description: "Securely store and access your files anywhere." },
  { icon: Shield, title: "Advanced Security", description: "Your files are protected with enterprise-grade encryption." },
  { icon: Globe, title: "Multi-language Support", description: "Convert content in over 50 languages." },
  { icon: Cpu, title: "AI-Powered Conversion", description: "Smart algorithms for optimal results." },
  { icon: Smartphone, title: "Mobile Friendly", description: "Convert on-the-go with our responsive design." },
  { icon: Clock, title: "Scheduled Conversions", description: "Set up automatic conversions at specific times." },
  { icon: Lock, title: "Password Protection", description: "Secure your converted files with passwords." },
  { icon: Repeat, title: "Version Control", description: "Keep track of file revisions and changes." },
  { icon: Sliders, title: "Custom Conversion Settings", description: "Fine-tune your conversion parameters." },
];
