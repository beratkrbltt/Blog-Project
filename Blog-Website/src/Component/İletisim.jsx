import React from 'react';

function İletisim() {
    return (
        <div>
            <div className="contact-container">
                <h2>Bana Ulaşın</h2>

                <div className="contact-card">
                    <img src="İmage/github.png" alt="GitHub Logo" className="contact-icon" />
                    <a href="https://github.com/beratkrbltt" className="contact-link">GitHub</a>
                </div>

                <div className="contact-card">
                    <img src="İmage/linkedin.png" alt="LinkedIn Logo" className="contact-icon" />
                    <a href="https://www.linkedin.com/in/berat-karabulut-2791bb277/" className="contact-link">LinkedIn</a>
                </div>

                <div className="contact-card">
                    <img src="İmage/mail.png" alt="Email Logo" className="contact-icon" />
                    <a href="mailto:berattkarabulutt52@gmail.com" className="contact-link">berattkarabulutt52@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default İletisim;
