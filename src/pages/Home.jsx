
import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/mubaraks-profile-pic.jpeg'; // Assuming the path; user confirmed it's in assets.

const Home = () => {
    const skills = [
        "Strategic Business Development & Market Expansion",
        "Project & Contract Management | Client Relationship Management",
        "Business Strategy & Operational Leadership",
        "Innovation & Digital Transformation",
        "AgriTech Solutions & Value Chain Development",
        "Corporate Capacity Building & Training Delivery",
        "Emerging Skills & Future-of-Work Program Implementation",
        "Stakeholder Management & International Partnerships"
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative bg-primary text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">

                        {/* Image Column (Mobile: Top, Desktop: Right - swapped order with flex-col-reverse if needed, but user wants Image Top on mobile) 
                            So structure: Image first in DOM? 
                            If Image first in DOM: Mobile: Image -> Text. 
                            Desktop: Image Left -> Text Right.
                            User said: "On desktop: can be left-aligned or right-aligned... properly balanced".
                            Let's do Image Right on Desktop for a "Flow to the right" feel? Or Image Left?
                            Standard executive often has Image Right, Text Left.
                            To achieve Image Top (Mobile) and Image Right (Desktop), we use `flex-col` (Image first) then `md:flex-row-reverse`.
                            Wait, `flex-col` puts first user content on top. So Image first. 
                            `md:flex-row-reverse` puts first child (Image) on right.
                            Perfect.
                        */}

                        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
                            <div className="relative">
                                {/* Decorative elements behind image */}
                                <div className="absolute -inset-4 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
                                <div className="relative h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-full border-4 border-white/10 shadow-2xl overflow-hidden ring-4 ring-accent/50">
                                    <img src={profilePic} alt="Mubarak Aminu" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Text Column */}
                        <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1 space-y-6">
                            <div>
                                <h2 className="text-accent font-medium tracking-wider uppercase text-sm md:text-base mb-2"></h2>
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-tight text-slate-300">
                                    Strategic Project <br className="hidden lg:block" /> Manager & <br />
                                    <span className="text-slate-300">Digital Transformation Strategist</span>
                                </h1>
                            </div>

                            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light">
                                Mubarak Aminu is a dedicated and results-driven professional with a passion for driving innovation and sustainable growth.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                                <Link to="/about" className="btn btn-accent text-white font-semibold px-8 py-4 shadow-lg shadow-accent/20 hover:shadow-accent/40 transform hover:-translate-y-1 transition-all duration-300 text-center">
                                    Learn More About Me
                                </Link>
                                <Link to="/portfolio" className="btn btn-outline border-slate-400 text-white hover:bg-white hover:text-primary px-8 py-4 hover:border-white transform hover:-translate-y-1 transition-all duration-300 text-center">
                                    View My Portfolio
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Professional Summary Section */}
            <section className="section-container">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="section-title">Professional Summary</h2>
                    <p className="mt-8 text-lg text-secondary leading-loose text-justify md:text-center">
                        Dedicated and results-driven Strategic Project Manager, Business Developer, and Digital Transformation Strategist with over half a decade of experience in harnessing technology to drive sustainable growth and innovation. Passionate about leveraging emerging technologies to address wicked challenges and contribute to societal development.
                    </p>
                    <p className="mt-6 text-lg text-secondary leading-loose text-justify md:text-center">
                        Mubarak blends strategic vision with hands-on operational excellence, delivering results in market expansion, project delivery, corporate transformation, and ecosystem building.
                    </p>
                </div>
            </section>

            {/* Skills Section */}
            <section className="bg-slate-50 py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="section-title">Core Competencies</h2>
                        <p className="text-secondary mt-4">Expertise and fields of impact</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <div key={index} className="card p-6 flex items-start hover:-translate-y-1 transition-transform duration-300 h-full">
                                <div className="mr-4 mt-1">
                                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                                </div>
                                <span className="text-primary font-medium">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

