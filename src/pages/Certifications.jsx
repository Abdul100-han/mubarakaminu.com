import React from 'react';
import { Award, Heart, Globe, Lightbulb } from 'lucide-react';

const certifications = [
    { name: "Google Project Management Certification", issuer: "Google" },
    { name: "Google Data Analytics Professional Certificate", issuer: "Google" },
    { name: "Design Thinking for Innovation", issuer: "University of Virginia" },
    { name: "Digital Business Academy", issuer: "Tech Nation UK" },
    { name: "SDG Innovation Challenge", issuer: "Melton Foundation" },
    { name: "Startup India Learning Program", issuer: "National Investment Promotion Agency India" },
    { name: "Stakeholder Management", issuer: "Aiivon Innovation Hub, Abuja" },
    { name: "Blockchain Basics and Smart Contracts", issuer: "University of Virginia" },
    { name: "Fundamentals of Digital Marketing", issuer: "Google" },
    { name: "Green Digital Skills", issuer: "INCO Academy" }
];

const interests = [
    "High Tech",
    "Startups",
    "AgriTech",
    "Creative Industries",
    "Traveling"
];

const volunteering = [
    {
        role: "Volunteering President",
        organization: "Ahmadu Bello University Developers",
        period: "2021",
        achievements: [
            "Led a team of developers to create innovative solutions.",
            "Coordinated activities and events promoting tech entrepreneurship.",
            "Built strategic partnerships to grow the tech ecosystem."
        ]
    },
    {
        role: "Core Team Member",
        organization: "Google Developer Club",
        period: "Jan 2020",
        achievements: [
            "Organized and facilitated tech workshops and events.",
            "Collaborated on club initiatives and projects."
        ]
    },
    {
        role: "Member",
        organization: "Enactus, Ahmadu Bello University",
        period: "Jan 2021",
        achievements: [
            "Collaborated on social entrepreneurship projects.",
            "Conducted market research and developed business plans."
        ]
    }
];

const Certifications = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="bg-primary text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl text-slate-300 md:text-5xl font-bold font-heading mb-4">Certifications & Professional Development</h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                        A continuous journey of learning, innovation, and global impactful leadership.
                    </p>
                </div>
            </section>

            {/* Certifications Grid */}
            <section className="section-container">
                <div className="text-center mb-12">
                    <h2 className="section-title">Certifications</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <div key={index} className="card p-6 flex items-start gap-4 hover:border-accent transition-colors duration-300 group">
                            <div className="bg-blue-50 p-3 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                <Award className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary text-lg leading-tight mb-1">{cert.name}</h3>
                                <p className="text-secondary text-sm">{cert.issuer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Interests Section */}
            <section className="bg-slate-50 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="section-title">Interests & Passions</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {interests.map((interest, index) => (
                            <span key={index} className="px-6 py-3 rounded-full bg-white text-primary border border-slate-200 font-medium shadow-sm hover:shadow-md hover:border-accent hover:text-accent transition-all duration-300 transform hover:-translate-y-1 cursor-default flex items-center gap-2">
                                <Lightbulb className="w-4 h-4" />
                                {interest}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Volunteering Section */}
            <section className="section-container">
                <div className="text-center mb-12">
                    <h2 className="section-title">Volunteering & Community Leadership</h2>
                </div>
                <div className="space-y-8 max-w-4xl mx-auto">
                    {volunteering.map((role, index) => (
                        <div key={index} className="bg-white border-l-4 border-l-slate-300 p-6 rounded-r-lg shadow-sm hover:border-l-accent transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-primary">{role.role}</h3>
                                    <div className="flex items-center text-accent font-medium mt-1">
                                        <Heart className="w-4 h-4 mr-2" />
                                        <span>{role.organization}</span>
                                    </div>
                                </div>
                                <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-2 md:mt-0 w-max">
                                    {role.period}
                                </span>
                            </div>
                            <ul className="space-y-2">
                                {role.achievements.map((item, i) => (
                                    <li key={i} className="flex item-start text-secondary">
                                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400"></span>
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Certifications;
