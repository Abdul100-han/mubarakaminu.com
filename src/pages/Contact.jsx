import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder submission logic
        console.log('Form submitted:', formData);
        alert('Thank you for reaching out! This is a demo form.');
    };

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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Contact Information */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-2xl font-bold font-heading text-primary mb-6">Get in Touch</h2>
                            <p className="text-secondary text-lg leading-relaxed">
                                Whether you have a project in mind, need strategic consultation, or just want to connect, I'd love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <Mail className="h-6 w-6 text-accent" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-primary">Email</h3>
                                    <a href="mailto:Mubarakaminu08@gmail.com" className="text-secondary hover:text-accent transition-colors">
                                        Mubarakaminu08@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <Phone className="h-6 w-6 text-accent" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-primary">Phone</h3>
                                    <a href="tel:+2348061513531" className="text-secondary hover:text-accent transition-colors">
                                        +234 806 151 3531
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <MapPin className="h-6 w-6 text-accent" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-primary">Location</h3>
                                    <p className="text-secondary">Nigeria</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary mb-4">Connect on Social Media</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="p-3 bg-slate-100 rounded-full text-secondary hover:bg-accent hover:text-white transition-all duration-300">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a href="#" className="p-3 bg-slate-100 rounded-full text-secondary hover:bg-accent hover:text-white transition-all duration-300">
                                    <Twitter className="h-5 w-5" />
                                </a>
                                <a href="#" className="p-3 bg-slate-100 rounded-full text-secondary hover:bg-accent hover:text-white transition-all duration-300">
                                    <Facebook className="h-5 w-5" />
                                </a>
                                <a href="#" className="p-3 bg-slate-100 rounded-full text-secondary hover:bg-accent hover:text-white transition-all duration-300">
                                    <Instagram className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-bold font-heading text-primary mb-6">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full rounded-md border-slate-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm px-4 py-3 border focus:outline-none"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full rounded-md border-slate-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm px-4 py-3 border focus:outline-none"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full rounded-md border-slate-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm px-4 py-3 border focus:outline-none"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full btn btn-primary flex justify-center items-center gap-2"
                                >
                                    <Send className="w-4 h-4" />
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
