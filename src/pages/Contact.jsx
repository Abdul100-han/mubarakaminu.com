import React from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="bg-primary text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">Contact Me</h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                        Let's collaborate, innovate, and drive impact together.
                    </p>
                </div>
            </section>

            <div className="section-container">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold font-heading text-primary mb-4">Get in Touch</h2>
                                <p className="text-secondary text-lg leading-relaxed">
                                    Whether you have a project in mind, need strategic consultation, or just want to connect, I'd love to hear from you.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-accent">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-sm font-medium text-slate-500">Email</h3>
                                        <a href="mailto:mubarakmas08@gmail.com" className="text-lg font-semibold text-primary hover:text-accent transition-colors">
                                            mubarakmas08@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-accent">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-sm font-medium text-slate-500">Phone</h3>
                                        <a href="tel:+2347070563194" className="text-lg font-semibold text-primary hover:text-accent transition-colors">
                                            +234 0707 056 3194
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-accent">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-sm font-medium text-slate-500">Location</h3>
                                        <p className="text-lg font-semibold text-primary">Nigeria</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-primary mb-4">Connect on Social Media</h3>
                                <div className="flex space-x-4">
                                    <a href="https://www.linkedin.com/in/mubarak-aminu-3087b3222" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 rounded-full text-secondary hover:bg-accent hover:text-white transition-all duration-300" aria-label="LinkedIn">
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                    <a href="https://x.com/MubarakMAS_" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 rounded-full text-secondary hover:bg-accent hover:text-white transition-all duration-300" aria-label="X (Twitter)">
                                        <Twitter className="h-5 w-5" />
                                    </a>
                                    <a href="https://www.instagram.com/mubarak_m.a.s" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 rounded-full text-secondary hover:bg-accent hover:text-white transition-all duration-300" aria-label="Instagram">
                                        <Instagram className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button Section */}
                        <div className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-xl border border-slate-100 text-center space-y-6">
                            <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-2">
                                <Send className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">Ready to Start?</h3>
                                <p className="text-secondary mb-6">Send me an email and I'll get back to you as soon as possible.</p>
                                <a
                                    href="mailto:Mubarakaminu08@gmail.com"
                                    className="btn btn-primary w-full py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                                >
                                    <Mail className="w-5 h-5" />
                                    Send Me an Email
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

