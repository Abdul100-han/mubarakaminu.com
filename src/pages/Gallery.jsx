import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

const galleryItems = [
    { id: 1, caption: "Tech Ecosystem Meetup 2024", category: "Events" },
    { id: 2, caption: "Epipy Strategic Planning Session", category: "Work" },
    { id: 3, caption: "Global Innovation Summit Panel", category: "Speaking" },
    { id: 4, caption: "Farm Nation Field Visit", category: "AgriTech" },
    { id: 5, caption: "Google Developer Club Workshop", category: "Community" },
    { id: 6, caption: "Northern Founders Networking", category: "Events" },
    // Add more placeholders as needed
];

const Gallery = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="bg-primary text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-300 font-heading mb-4">Gallery</h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                        Capturing moments from events, meetups, and professional engagements.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="section-container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item) => (
                        <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-sm bg-slate-100 aspect-[4/3] cursor-pointer">
                            {/* Placeholder Image using a generic colored block or pattern */}
                            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                <ImageIcon className="w-12 h-12 text-slate-300" />
                            </div>

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1">{item.category}</span>
                                <h3 className="text-white font-medium text-lg leading-tight">{item.caption}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Gallery;
