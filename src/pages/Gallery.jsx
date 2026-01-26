import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

// Pool of professional descriptions to cycle through
const descriptions = [
    "Discussing sustainable farming solutions with industry leaders and stakeholders.",
    "Engaging with local communities to understand ground-level challenges and opportunities.",
    "Mapping out strategic roadmaps for next-generation digital transformation initiatives.",
    "Networking with fellow founders, developers, and innovators at key tech gatherings.",
    "Celebrating the successful deployment of automated systems and project milestones.",
    "Mentoring young professionals on effective project management and leadership skills.",
    "Conducting on-site assessments of facilities to ensure operational excellence.",
    "Sharing insights on the future of FinTech and digital finance in emerging markets.",
    "Fostering collaboration and innovation within cross-functional diverse teams.",
    "Presenting detailed impact reports to key investors and international partners.",
    "Recognized for contributions to sustainable development goals and community impact.",
    "Exploring collaboration opportunities with international delegates and organizations.",
    "Leading workshops on digital skills and future-of-work readiness.",
    "Facilitating strategic sessions to drive business growth and market expansion.",
    "Overseeing the implementation of smart agricultural technologies in rural areas.",
    "Building partnerships to strengthen the local tech and startup ecosystem.",
    "Advocating for climate action and sustainable business practices.",
    "Coordinating large-scale community initiatives and volunteer programs.",
    "Driving innovation in the financial sector through community-based solutions.",
    "Empowering local businesses through digital tools and capacity building."
];

const Gallery = () => {
    const [galleryItems, setGalleryItems] = useState([]);
    const [visibleCount, setVisibleCount] = useState(20);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        // Dynamically import all images from the portfolio assets directory
        const images = import.meta.glob('../assets/portfolio/*.{jpeg,jpg,png}', { eager: true });

        // Process the imported images into a gallery data array
        const items = Object.keys(images).map((path, index) => {
            // Get the image URL from the module
            const imageUrl = images[path].default;

            return {
                id: index,
                image: imageUrl,
                // Cycle through descriptions based on index to ensure variety
                description: descriptions[index % descriptions.length]
            };
        });

        setGalleryItems(items);
    }, []);

    const loadMore = () => {
        setVisibleCount(prev => prev + 15);
    };

    const openLightbox = (item) => {
        setSelectedImage(item);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {galleryItems.slice(0, visibleCount).map((item) => (
                        <div
                            key={item.id}
                            className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 cursor-pointer h-full"
                            onClick={() => openLightbox(item)}
                        >
                            <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative">
                                <img
                                    src={item.image}
                                    alt="Gallery Moment"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {/* Subtle visual cue on hover */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>

                            <div className="p-5 flex-grow flex items-center">
                                <p className="text-secondary text-sm leading-relaxed font-medium">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleCount < galleryItems.length && (
                    <div className="text-center mt-16 animate-in fade-in zoom-in duration-500">
                        <button
                            onClick={loadMore}
                            className="btn btn-primary px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                        >
                            View More Moments
                        </button>
                    </div>
                )}
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-200" onClick={closeLightbox}>
                    <button
                        className="absolute top-4 right-4 text-white hover:text-accent focus:outline-none transition-colors p-2 bg-white/10 rounded-full backdrop-blur-sm"
                        onClick={closeLightbox}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedImage.image}
                            alt="Gallery Fullscreen"
                            className="w-auto h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                        />
                        <div className="mt-6 text-center text-white max-w-2xl bg-black/50 p-4 rounded-xl backdrop-blur-sm">
                            <p className="text-lg md:text-xl font-medium leading-relaxed">{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
