import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary border-t border-slate-800 mt-auto">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <div className="mb-4 md:mb-0">
                        <span className="text-xl font-bold font-heading text-white tracking-tight">Mubarak Aminu</span>
                        <p className="text-slate-400 text-sm mt-1">
                            Strategic Project Management & Digital Transformation
                        </p>
                    </div>
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Mubarak Aminu. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
