import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Portfolio image descriptions are mapped by filename.
const imageDescriptions = {
    "1": "Professional training for Twistone Staff.",
    "2": "With the founder of BILAAD REALTY on a business trip to TY DANJUMA logistics hub.",
    "91": "After a successful business engagement session with SSA to Hon. Speaker house of representative. Hon. Abbas Tajudeen.",
    "100": "After a training session with Voyage International School on Digital Transformation and Skills of the Future.",
    "101": "Serving as field consultant on cattle tracking and monitoring system for NIRSAL.",
    "16": "Digitizing cattle tracking ID and monitoring system.",
    "94": "Serving as panelist on real world utility of blockchain.",
    "12": "As a panelist during the MSSN students engagement on future skills.",
    "11": "High level engagement with Northern investment forum and other stakeholders.",
    "95": "After securing N50M for impact scholarships at Eduvacity where I serve as a business development specialist.",
    "13": "Speaking about the real world utilities of blockchain during Polkadot meetup.",
    "103": "Training stakeholders on climate smart systems for step-down training for Northern Nigeria.",
    "17": "Invited to deliberate on the state of the UN SDGs at the UN House Nigeria.",
    "7": "After a strategic meeting with the Hon. Ambassador of Bangladesh to Nigeria.",
    "32": "Invited by CGIAR as a business development specialist on idea and business development sessions for Koolbox.",
    "35": "Graced ONDI invitation during the 1st cohort of the iHatch program.",
    "33": "Expatriate meeting with key stakeholders in Nigeria and the Ambassador of Bangladesh to Nigeria.",
    "6": "High-level engagement on the state of Northern Nigeria alongside the Minister of Arts & Culture and DG of NITDA.",
    "21": "After hosting a successful Founder–Investor meetup.",
    "22": "Our community member won the iHatch program.",
    "5": "After a high-level engagement with international business partners.",
    "24": "With the tech team that developed the Moola fintech app where I served as project manager and business developer.",
    "104": "With the country director of Social Good Fund USA after a strategic engagement.",
    "41": "With other founders during the first NSIA Prize for Innovation at WE Innovation Hub.",
    "4": "Invited to the LLaMA 3.1 Impact Hackathon in Kigali, Rwanda.",
    "42": "Powerful product presentation at the CGIAR Innovation Program in Egypt.",
    "3": "Successful business and idea refinement with founders across the world in Egypt.",
    "44": "Active training session on business development and idea refinement.",
    "45": "After winning the Unique Network Challenge in Naivasha, Kenya.",
    "48": "With my flying crew during our UAV building session.",
    "49": "Presentation on the impact of AI in education and content localization at LLaMA Impact Program Kigali.",
    "47": "Finalist for the NSIA Prize for Innovation, Lagos.",
    "WhatsApp Image 2026-01-25 at 15.53.23": "After a successful engagement with the Saudi business representative in Nigeria.",
    "WhatsApp Image 2026-01-25 at 15.53.19": "As the state coordinator of the Climate Action Superhero Program, converting waste to wealth with my heroes."
};

const Gallery = () => {
    const [galleryItems, setGalleryItems] = useState([]);
    const [visibleCount, setVisibleCount] = useState(20);
    const [selectedIndex, setSelectedIndex] = useState(null);

    useEffect(() => {
        const images = import.meta.glob('../assets/portfolio/*.{jpeg,jpg,png}', { eager: true });

        const items = Object.keys(images).map((path) => {
            const fileName = path.split('/').pop();
            const imageUrl = images[path].default;
            return { fileName, imageUrl, path };
        });

        // Portfolio images are now numerically sorted by filename.
        items.sort((a, b) => {
            const getNumber = (src) =>
                parseInt(src.split('/').pop().replace('.jpeg', '').replace('.jpg', '').replace('.png', ''), 10);

            const numA = getNumber(a.path);
            const numB = getNumber(b.path);

            // Handle non-numeric filenames (put them at the end)
            if (isNaN(numA) && isNaN(numB)) {
                return a.fileName.localeCompare(b.fileName);
            }
            if (isNaN(numA)) return 1;
            if (isNaN(numB)) return -1;

            // Prioritize 1-7 first, then other numbers in numeric order
            const priorityA = (numA >= 1 && numA <= 7) ? numA : 1000 + numA;
            const priorityB = (numB >= 1 && numB <= 7) ? numB : 1000 + numB;

            return priorityA - priorityB;
        });

        const processedItems = items.map((item, index) => {
            // Extract filename without extension for description lookup
            const filename = item.fileName.replace(/\.(jpeg|jpg|png)$/i, '');
            const description = imageDescriptions[filename] || '';
            
            return {
                id: index,
                image: item.imageUrl,
                description: description
            };
        });

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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
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

                            {item.description && (
                                <div className="p-3 md:p-5 flex-grow flex items-center">
                                    <p className="text-secondary text-sm leading-relaxed font-medium">
                                        {item.description}
                                    </p>
                                </div>
                            )}
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
                        {galleryItems[selectedIndex].description && (
                            <div className="mt-6 text-center text-white max-w-2xl bg-black/50 p-4 rounded-xl backdrop-blur-sm">
                                <p className="text-base md:text-xl font-medium leading-relaxed">
                                    {galleryItems[selectedIndex].description}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
