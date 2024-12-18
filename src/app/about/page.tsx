'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Zap, Users, Target, TrendingUp, Globe, Shield } from 'lucide-react'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-purple-900 text-white">
            <div>
                {/* Navigation */}
                <nav className="fixed top-0 w-full z-50 border-b border-gray-200 bg-purple-800/50 backdrop-blur-xl">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16 items-center">
                            <Link href="/" className="flex items-center space-x-2">
                                <Zap className="h-8 w-8 text-purple-600" />
                                <span className="text-2xl font-bold">ConvertPro</span>
                            </Link>
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="#"
                                    className="px-4 py-2 rounded-md text-sm font-medium bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors duration-300"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900 via-purple-700 to-purple-600">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
                            About
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"> ConvertPro</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            Transforming the way you work with files, one conversion at a time.
                        </p>
                    </div>
                </section>

                {/* Our Story */}
                <section className="py-20 bg-transparent">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-lg mb-4 text-gray-300">
                                    Founded in 2015, ConvertPro started with a simple mission: to make file conversion accessible to everyone. Our founders, tech enthusiasts with years of experience in software development, recognized the growing need for a reliable, user-friendly file conversion tool in an increasingly digital world.
                                </p>
                                <p className="text-lg text-gray-300">
                                    What began as a small startup has now grown into a global platform, serving millions of users across the world. Our journey has been marked by continuous innovation, always striving to stay ahead of the curve in file conversion technology.
                                </p>
                            </div>
                            <div className="relative h-64 md:h-auto">
                                <Image
                                    src="/placeholder.svg"
                                    alt="ConvertPro team"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission and Vision */}
                <section className="py-20 bg-transparent">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold mb-12 text-center">Mission and Vision</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="p-6 rounded-lg bg-purple-700/50 backdrop-blur-lg shadow-lg">
                                <Target className="h-12 w-12 text-purple-600 mb-4" />
                                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                                <p className="text-gray-300">
                                    To empower individuals and businesses with seamless file conversion solutions, enhancing productivity and creativity across all digital platforms.
                                </p>
                            </div>
                            <div className="p-6 rounded-lg bg-purple-700/50 backdrop-blur-lg shadow-lg">
                                <TrendingUp className="h-12 w-12 text-purple-600 mb-4" />
                                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                                <p className="text-gray-300">
                                    To be the worlds leading file conversion platform, known for our innovation, reliability, and commitment to user satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="py-20 bg-transparent">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {coreValues.map((value, index) => (
                                <div key={index} className="p-6 rounded-lg bg-purple-700/50 backdrop-blur-lg shadow-lg">
                                    <value.icon className="h-10 w-10 text-purple-600 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                    <p className="text-gray-300">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="py-20 bg-transparent">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="p-6 rounded-lg bg-purple-700/50 backdrop-blur-lg shadow-lg text-center">
                                    <div className="relative w-32 h-32 mx-auto mb-4">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                                    <p className="text-gray-300 mb-2">{member.position}</p>
                                    <p className="text-gray-400">{member.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Milestones */}
                <section className="py-20 bg-transparent">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold mb-12 text-center">Milestones</h2>
                        <div className="relative">
                            <ol className="space-y-6">
                                {milestones.map((milestone, index) => (
                                    <li key={index} className="flex items-center space-x-4">
                                        <span className="text-lg font-semibold text-purple-600">{milestone.year}</span>
                                        <p className="text-lg text-gray-300">{milestone.description}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-20 bg-purple-800">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold mb-12 text-center text-white">What Our Users Say</h2>
                        <div className="flex space-x-6 overflow-x-auto">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="flex-shrink-0 bg-purple-700/50 p-8 rounded-lg shadow-lg backdrop-blur-lg">
                                    <p className="text-lg text-gray-200 mb-4">&ldquo;{testimonial.quote}&ldquo;</p>
                                    <p className="text-sm font-semibold text-purple-400">{testimonial.name}</p>
                                    <p className="text-sm text-gray-300">{testimonial.position}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 bg-purple-900 text-white text-center">
                    <p>&copy; 2024 ConvertPro. All rights reserved.</p>
                </footer>
            </div>
        </div>
    )
}

// Sample data arrays (coreValues, teamMembers, milestones, testimonials, etc.)
const coreValues = [
    { icon: Shield, title: 'Security', description: 'We prioritize security to keep your data safe.' },
    { icon: Globe, title: 'Innovation', description: 'We are constantly improving our solutions.' },
    { icon: Users, title: 'Collaboration', description: 'Working together to bring better outcomes.' },
    { icon: Zap, title: 'Efficiency', description: 'Optimizing processes for maximum productivity.' },
]

const teamMembers = [
    { name: 'Jane Doe', position: 'CEO', image: '/team/jane.jpg', bio: 'Passionate about technology and leadership.' },
    { name: 'John Smith', position: 'CTO', image: '/team/john.jpg', bio: 'Tech visionary and problem solver.' },
]

const milestones = [
    { year: '2015', description: 'Founded and launched our first file converter.' },
    { year: '2018', description: 'Reached 1 million users worldwide.' },
]

const testimonials = [
    { name: 'Alice Johnson', position: 'CEO, TechCo', quote: 'ConvertPro has been a game-changer for us!' },
    { name: 'Bob Lee', position: 'Freelancer', quote: 'Efficient and reliable tool. Highly recommended.' },
]
