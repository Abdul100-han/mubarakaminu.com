import React from 'react';
import { Mail, Phone, User } from 'lucide-react';

const About = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="bg-primary text-white py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-300 font-heading mb-4">About Mubarak Aminu</h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
                        Dynamic Entrepreneur, Innovation Leader & Strategic Business Architect
                    </p>
                </div>
            </section>

            {/* Biography Section */}
            <section className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6 text-lg text-secondary leading-relaxed text-justify md:text-left">
                        <p>
                            Dynamic entrepreneur, business strategist, and innovation leader with extensive experience in business development, project execution, and organizational transformation.
                        </p>
                        <p>
                            Founder and CEO of Epipy Limited, a business development and management consultancy firm, driving ventures that enhance corporate performance, empower communities, and deliver scalable solutions across technology, agritech, and fintech sectors.
                        </p>
                        <p>
                            Co-founder of PayNuq, a circular finance system enabling SMEs and local communities, and of AquaLife iFarms, whose smart aquaculture solutions have reached Egypt, Italy, Rwanda, and other global ecosystems, creating measurable impact in food security and sustainable practices.
                        </p>
                        <p>
                            Led the strategy and operationalization of Farm Nation, developing agricultural value chains, training programs, and market linkages.
                        </p>
                        <p>
                            Proven track record in business growth, client relationship management, and contract execution, working with clients such as 3logy, Interface, Eduvacty, Twistone, and other institutions.
                        </p>
                        <p>
                            Globally trained and certified by Google, Meta, Cisco, University of Virginia, Tech Nation UK, UpGrad India, CGIAR, Forward-McKinsey & Company, among others.
                        </p>
                        <p className="font-medium text-primary">
                            Mubarak blends strategic vision with hands-on operational excellence, delivering results in market expansion, project delivery, corporate transformation, and ecosystem building.
                        </p>
                    </div>

                    {/* Sidebar / Contact Info */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 sticky top-24">
                            <h3 className="text-xl font-bold font-heading text-primary mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-50 text-accent">
                                            <User className="h-5 w-5" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-slate-500">Name</p>
                                        <p className="text-base font-semibold text-primary">Mubarak Aminu</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-50 text-accent">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-slate-500">Email</p>
                                        <a href="mailto:Mubarakaminu08@gmail.com" className="text-base font-semibold text-primary hover:text-accent transition-colors">
                                            Mubarakaminu08@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-50 text-accent">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-slate-500">Phone</p>
                                        <a href="tel:+2348061513531" className="text-base font-semibold text-primary hover:text-accent transition-colors">
                                            +234 806 151 3531
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <a
                                    href="/contact"
                                    className="w-full btn btn-primary"
                                >
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
