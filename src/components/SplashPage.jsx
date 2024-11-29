import React from 'react';

function SplashPage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <img src="/clarity-thumb.svg" alt="Clarity Logo" className="splash-image mb-5" />
            <div className="spinner-container">
                <div className="spinner"></div>
            </div>
        </div>
    );
}

export default SplashPage;
