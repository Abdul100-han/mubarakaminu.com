import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        role: "Founder",
        company: "PayNuq",
        // period: "2024 – Present",
        achievements: [
            "Built and scaled a community currency powering 100+ users, 8+ businesses, and ₦3M+ in local transactions.",
            "Bootstrapped ₦15M+ liquidity to support business activity and community trade.",
            "Led operations, partnerships, treasury management, and ecosystem engagement on Encointer (Kusama)."
        ]
    },
    {
        role: "Founder",
        company: "Epipy Limited",
        // period: "2020 – Present",
        achievements: [
            "Lead multiple high-impact projects and ventures, including PayNuq (community financial ecosystem).",
            "Deliver strategic solutions, manage client contracts, and drive partnerships with organizations including 3logy, Interface, Eduvacty, Twistone, and others.",
            "Oversee business development, operational strategy, and execution across technology, fintech, and agritech sectors.",
            "Guide teams to implement scalable systems, generate revenue, and achieve measurable social and economic impact."
        ]
    },
    {
        role: "Co-founder",
        company: "AquaLife iFarms",
        // period: "2020 – Present",
        achievements: [
            "Designed and executed smart automated aquaculture solutions.",
            "Automated water management, waste conversion, and sustainable feed systems.",
            "Expanded product impact to Egypt, Italy, and Rwanda.",
            "Managed partnerships to ensure sustainability and adoption."
        ]
    },
    {
        role: "Management Executive",
        company: "Northern Founders Community",
        // period: "2023 – Present",
        achievements: [
            "Oversee community management and network growth.",
            "Lead partnership development and collaborations.",
            "Drive strategic planning, execution, and performance tracking."
        ]
    },
    {
        role: "Business Developer",
        company: "Interface & Eduvacty",
        period: "2024",
        achievements: [
            "Led market expansion strategies.",
            "Drove investor readiness programs.",
            "Managed customer acquisition campaigns.",
            "Optimized operations and service scalability."
        ]
    },
    {
        role: "Business Developer & Project Manager",
        company: "Total Secure Nigeria Limited",
        period: "2023 – 2024",
        achievements: [
            "Led market research initiatives.",
            "Managed cross-functional teams.",
            "Used customer insights to inform strategy.",
            "Built strong stakeholder relationships.",
            "Facilitated training and performance improvement."
        ]
    },
    {
        role: "Program Coordinator",
        company: "Green Hub Africa & IHS",
        period: "2023",
        achievements: [
            "Coordinated climate action syllabus across secondary schools in Northern Nigeria.",
            "Organized workshops and stakeholder training.",
            "Ensured alignment with educational standards."
        ]
    },
    {
        role: "Marketing Strategist",
        company: "KP Group",
        period: "2022",
        achievements: [
            "Developed marketing strategies.",
            "Managed digital and traditional campaigns.",
            "Coordinated content creation and engagement.",
            "Analyzed market trends."
        ]
    },
    {
        role: "Assistant IT Manager",
        company: "3logy Nigeria Limited",
        period: "2018 – 2023",
        achievements: [
            "Assisted in IT infrastructure management.",
            "Supported system upgrades and enhancements.",
            "Facilitated IT training programs.",
            "Coordinated program execution."
        ]
    },
    {
        role: "Business Developer",
        company: "Bilic London, UK",
        period: "2022 – 2023",
        achievements: [
            "Conducted market research.",
            "Managed fundraising processes.",
            "Built client and partner relationships.",
            "Led cross-team collaboration.",
            "Applied data analytics to decision-making."
        ]
    }
];

const Portfolio = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="bg-primary text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-300 mb-4">Professional Experience</h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        A timeline of strategic leadership, impactful projects, and business transformation.
                    </p>
                </div>
            </section>

            {/* Experience List */}
            <section className="section-container">
                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="card p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:shadow-md transition-all duration-300 border-l-4 border-l-transparent hover:border-l-accent">
                            {/* Left Column: Meta Info */}
                            <div className="md:w-1/3 flex-shrink-0">
                                <h3 className="text-xl font-bold text-primary font-heading leading-tight">{exp.role}</h3>
                                <div className="mt-2 flex items-center text-accent font-medium">
                                    <Briefcase className="w-4 h-4 mr-2" />
                                    <span>{exp.company}</span>
                                </div>
                                <div className="mt-1 flex items-center text-slate-500 text-sm">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            {/* Right Column: Achievements */}
                            <div className="md:w-2/3">
                                <ul className="space-y-2">
                                    {exp.achievements.map((item, i) => (
                                        <li key={i} className="flex item-start text-secondary">
                                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400"></span>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
