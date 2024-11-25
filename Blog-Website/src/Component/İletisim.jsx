import React from 'react';

const contactDetails = [
    {
        id: 1,
        name: 'GitHub',
        url: 'https://github.com/beratkrbltt',
        icon: 'İmage/github.png',
        alt: 'GitHub Logo'
    },
    {
        id: 2,
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/berat-karabulut-2791bb277/',
        icon: 'İmage/linkedin.png',
        alt: 'LinkedIn Logo'
    },
    {
        id: 3,
        name: 'Email',
        url: 'mailto:berattkarabulutt52@gmail.com',
        icon: 'İmage/mail.png',
        alt: 'Email Logo'
    }
];

function İletisim() {
    return (
        <div className="contact-container">
            <h2>Bana Ulaşın</h2>

            {contactDetails.map(contact => (
                <div key={contact.id} className="contact-card">
                    <img
                        src={contact.icon}
                        alt={contact.alt}
                        className="contact-icon"
                        aria-label={`Link to ${contact.name}`}
                    />
                    <a href={contact.url} className="contact-link">
                        {contact.name}
                    </a>
                </div>
            ))}
        </div>
    );
}

export default İletisim;
