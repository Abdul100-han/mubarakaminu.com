import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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
    const [selectedIndex, setSelectedIndex] = useState(null);

    useEffect(() => {
        const images = import.meta.glob('../assets/portfolio/*.{jpeg,jpg,png}', { eager: true });

        const items = Object.keys(images).map((path) => {
            const fileName = path.split('/').pop();
            const imageUrl = images[path].default;
            return { fileName, imageUrl };
        });

        // Numeric sorting: 1-7 first, then other numbers, then non-numbered files
        items.sort((a, b) => {
            const getSortKey = (name) => {
                // Remove extension and extract leading number
                const cleanName = name.split('.')[0];
                const num = parseInt(cleanName, 10);

                if (!isNaN(num)) {
                    // Prioritize 1-7
                    if (num >= 1 && num <= 7) return num;
                    // Other numbers follow numerically
                    return 1000 + num;
                }
                // Non-numbered files (e.g., WhatsApp images) at the end
                return 5000;
            };

            const sortKeyA = getSortKey(a.fileName);
            const sortKeyB = getSortKey(b.fileName);

            if (sortKeyA !== sortKeyB) {
                return sortKeyA - sortKeyB;
            }
            return a.fileName.localeCompare(b.fileName);
        });

        const processedItems = items.map((item, index) => ({
            id: index,
            image: item.imageUrl,
            description: descriptions[index % descriptions.length]
        }));

        setGalleryItems(processedItems);
    }, []);

    const loadMore = () => setVisibleCount(prev => prev + 15);

    const openLightbox = (index) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);

    const showNext = useCallback((e) => {
        if (e) e.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % galleryItems.length);
    }, [galleryItems.length]);

    const showPrev = useCallback((e) => {
        if (e) e.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    }, [galleryItems.length]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, showNext, showPrev]);

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-300 font-heading mb-4">Gallery</h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                        Capturing moments from events, meetups, and professional engagements.
                    </p>
                </div>
            </section>

            <section className="section-container">
                <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
                    {galleryItems.slice(0, visibleCount).map((item, index) => (
                        <div
                            key={item.id}
                            className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 cursor-pointer h-full"
                            onClick={() => openLightbox(index)}
                        >
                            <div className="aspect-square md:aspect-[4/5] overflow-hidden bg-slate-100 relative">
                                <img
                                    src={item.image}
                                    alt="Gallery Moment"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>

                            <div className="p-3 md:p-5 flex-grow flex items-center hidden md:flex">
                                <p className="text-secondary text-sm leading-relaxed font-medium">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleCount < galleryItems.length && (
                    <div className="text-center mt-12 md:mt-16">
                        <button
                            onClick={loadMore}
                            className="bg-primary hover:bg-slate-800 text-white px-8 py-3 rounded-full shadow-lg transition-all"
                        >
                            View More Moments
                        </button>
                    </div>
                )}
            </section>

            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-200"
                    onClick={closeLightbox}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-accent z-[110] p-2 bg-white/10 rounded-full backdrop-blur-sm"
                        onClick={closeLightbox}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent z-[110] p-2 bg-white/5 rounded-full backdrop-blur-sm transition-all"
                        onClick={showPrev}
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>

                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent z-[110] p-2 bg-white/5 rounded-full backdrop-blur-sm transition-all"
                        onClick={showNext}
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>

                    <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={galleryItems[selectedIndex].image}
                            alt="Gallery Fullscreen"
                            className="w-auto h-auto max-h-[75vh] md:max-h-[80vh] object-contain rounded-lg shadow-2xl"
                        />
                        <div className="mt-6 text-center text-white max-w-2xl bg-black/50 p-4 rounded-xl backdrop-blur-sm">
                            <p className="text-base md:text-xl font-medium leading-relaxed">
                                {galleryItems[selectedIndex].description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
