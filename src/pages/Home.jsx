
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/mubaraks-profile-pic.jpeg'; // Assuming the path; user confirmed it's in assets.

const Home = () => {
    const [isExpanded, setIsExpanded] = useState(false);

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
                                    Strategic Business Developer, <br className="hidden lg:block" />Project Manager & <br />
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

            {/* What I Do / How I Help Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="section-title">What I Do</h2>
                        <p className="text-secondary mt-4 max-w-2xl mx-auto">Helping organizations build scalable solutions and drive meaningful impact.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Business & Market Development", desc: "Identifying opportunities, partnerships, and scalable growth strategies." },
                            { title: "Digital Transformation Strategy", desc: "Helping organizations adopt technology to improve operations, impact, and growth." },
                            { title: "Project & Program Management", desc: "Leading cross-functional teams to deliver complex projects on time and within scope." },
                            { title: "Tech for Impact & Sustainability", desc: "Applying technology to climate action, education, and SDG-aligned initiatives." }
                        ].map((item, index) => (
                            <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                                <div className="h-2 w-12 bg-accent rounded-full mb-4"></div>
                                <h3 className="text-lg font-bold text-primary mb-3 leading-tight">{item.title}</h3>
                                <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Impact & Results Section */}
            <section className="section-container bg-primary text-white relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-heading mb-4">Impact & Experience Highlights</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                            "Coordinated climate education programs across secondary schools in Northern Nigeria",
                            "Managed multi-disciplinary teams using Jira, Google Workspace, and Microsoft Teams",
                            "Supported startups in cybersecurity, agritech, and digital innovation",
                            "Trained and mentored students and professionals in tech and digital skills"
                        ].map((item, index) => (
                            <div key={index} className="flex items-start p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="mt-1.5 mr-4 h-2 w-2 rounded-full bg-accent flex-shrink-0"></div>
                                <span className="text-lg text-slate-200">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Role-Based Content Cards */}
            <section className="bg-slate-50 py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { 
                                title: "Founder and CEO of Epipy Limited", 
                                description: "Leads strategic growth, partnerships, and execution across business development, innovation, and project delivery."
                            },
                            { 
                                title: "Co-founder of PayNuq", 
                                description: "Driving product strategy, technology adoption, and scalable solutions in the fintech ecosystem."
                            },
                            { 
                                title: "Managing Executive of Northern Founders Community", 
                                description: "Building and supporting startup ecosystems through mentorship, collaboration, and access to opportunities."
                            }
                        ].map((role, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
                                <h3 className="text-xl font-bold text-primary mb-4 leading-tight">{role.title}</h3>
                                <p className="text-secondary text-sm leading-relaxed">{role.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Speaking, Community & Leadership */}
            <section className="section-container">
                <div className="text-center mb-12">
                    <h2 className="section-title">Community, Speaking & Leadership</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                    {[
                        "Keynote Speaker – GDG / DevCon",
                        "Former President – ABU Developers",
                        "Google Developer Student Club – Core Team",
                        "Tech & Climate Advocate"
                    ].map((item, index) => (
                        <div key={index} className="bg-white px-8 py-4 rounded-full border border-slate-200 shadow-sm text-primary font-medium hover:border-accent hover:text-accent transition-all duration-300 cursor-default">
                            {item}
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Section (Original) */}
            <section className="bg-slate-50 py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="section-title">Core Competencies</h2>
                        <p className="text-secondary mt-4">Expertise and fields of impact</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className={`card p-6 flex items-start hover:-translate-y-1 transition-transform duration-300 h-full ${index >= 3 ? 'hidden md:flex' : 'flex'
                                    } ${isExpanded && index >= 3 ? '!flex' : ''
                                    }`}
                            >
                                <div className="mr-4 mt-1">
                                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                                </div>
                                <span className="text-primary font-medium">{skill}</span>
                            </div>
                        ))}
                    </div>

                    {/* View More Button - Mobile Only */}
                    <div className="mt-10 text-center md:hidden">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-accent font-bold flex items-center justify-center mx-auto hover:text-primary transition-colors"
                        >
                            {isExpanded ? 'Show Less' : 'View More'}
                            <span className="ml-2">{isExpanded ? '↑' : '↓'}</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Strong Call to Action */}
            <section className="bg-primary text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Let’s Work Together</h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                        Ready to drive innovation and sustainable growth? Let's collaborate.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="btn btn-accent text-white font-semibold px-10 py-4 shadow-lg hover:shadow-accent/40 transform hover:-translate-y-1 transition-all">
                            Contact Me
                        </Link>
                        <Link to="/portfolio" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary px-10 py-4">
                            View My Portfolio
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

