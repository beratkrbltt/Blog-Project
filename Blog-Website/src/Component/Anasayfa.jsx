import React from 'react';
import Card from './Card';

function Anasayfa() {
    const cards = [
        {
            image: '/İmage/kart1.jpg',
            title: 'Web Geliştirme Yolculuğum Part 1: HTML/CSS Öğrenme Deneyimim',
            description: 'Bu yazımda, HTML ve CSS öğrenirken yararlandığım kaynakları ve kendini bu alanda geliştirmek isteyen adaylara tavsiyelerimi paylaşacağım.',
            link: '/Kart1'
        },
        {
            image: 'İmage/js.jpg',
            title: 'Henüz Yayınlanmadı!',
            description: null,
            link: '#'
        },
        {
            image: 'İmage/react.jpg',
            title: 'Henüz Yayınlanmadı!',
            description: null,
            link: '#'
        }
    ];

    return (
        <div className="container_index">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    link={card.link}
                />
            ))}
        </div>
    );
}

export default Anasayfa;
