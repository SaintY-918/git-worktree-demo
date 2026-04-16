import { useState, useEffect } from 'react';
import './CookieConsent.css';

function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleConsent = (choice) => {
        localStorage.setItem('cookie-consent', choice);
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-consent">
            <div className="cookie-consent__content">
                <h3 className="cookie-consent__title">需要您的同意 (Cookie Consent)</h3>
                <p className="cookie-consent__text">
                    我們使用 cookies 來提升您的瀏覽體驗、分析網站流量，並為您提供客製化內容。<br />
                    請選擇您是否同意使用 cookies：
                </p>
                <div className="cookie-consent__actions">
                    <button onClick={() => handleConsent('settings')} className="btn btn--outline">
                        設定
                    </button>
                    <button onClick={() => handleConsent('rejected')} className="btn btn--outline">
                        拒絕
                    </button>
                    <button onClick={() => handleConsent('accepted')} className="btn btn--primary">
                        接受
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CookieConsent;
