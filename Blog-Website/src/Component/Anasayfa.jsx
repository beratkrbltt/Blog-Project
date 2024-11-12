import React from 'react';

function Anasayfa() {
    return (
        <div className="container_index">
            <div className="card">
                <div className="card-content">
                    <img src="/İmage/kart1.jpg" alt="Image 1" className="card-image" />
                    <div className="text-content">
                        <h3>Web Geliştirme Yolculuğum Part 1: HTML/CSS Öğrenme Deneyimim</h3>
                        <p>
                            Bu yazımda, HTML ve CSS öğrenirken yararlandığım kaynakları ve
                            kendini bu alanda geliştirmek isteyen adaylara tavsiyelerimi
                            paylaşacağım. <br />
                            Ayrıca, geliştirdiğim iki projenin görsellerini de ekleyeceğim.
                        </p>
                        <a href="Kart1" className="button">Detaylar</a>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-content">
                    <img src="İmage/js.jpg" alt="Image 2" className="card-image" />
                    <div className="text-content">
                        <h3>Henüz Yayınlanmadı!</h3>
                        <a href="#" className="button">Detaylar</a>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-content">
                    <img src="İmage/react.jpg" alt="Image 3" className="card-image" />
                    <div className="text-content">
                        <h3>Henüz Yayınlanmadı!</h3>
                        <a href="#" className="button">Detaylar</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Anasayfa;
