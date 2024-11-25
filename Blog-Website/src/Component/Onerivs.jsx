import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ekleYorum, temizleYorumlar } from '../Redux/yorumlarSlice.jsx';
import '../Css/style.css';

function Oneri() {
    const dispatch = useDispatch();
    const yorumlar = useSelector((state) => state.yorumlar.list);
    const [formData, setFormData] = useState({ ad: '', email: '', yorum: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(ekleYorum(formData)); // Redux üzerinden yeni yorum ekler
        setFormData({ ad: '', email: '', yorum: '' }); // Formu sıfırlar
    };

    return (
        <div className="container_yorumlar">
            <h2>Öneriler</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="ad">Adınız</label>
                <input
                    type="text"
                    name="ad"
                    value={formData.ad}
                    onChange={handleInputChange}
                    placeholder="Adınız"
                    required
                />
                <label htmlFor="email">E-posta</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E-posta"
                    required
                />
                <label htmlFor="yorum">Yorumunuz</label>
                <textarea
                    name="yorum"
                    value={formData.yorum}
                    onChange={handleInputChange}
                    placeholder="Yorumunuz"
                    required
                />
                <button type="submit">Gönder</button>
            </form>
            <button className='button' onClick={() => dispatch(temizleYorumlar())}>Yorumları Temizle</button>

            {yorumlar.length > 0 ? (
                <ul>
                    {yorumlar.map((yorum, index) => (
                        <li style={{ marginTop: '20px' }} className="yorum-item" key={index}>
                            <strong>{yorum.ad}</strong> ({yorum.email}): {yorum.yorum}
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="yorum-bos">
                    <p>Henüz yorum yapılmamış.</p>
                </div>
            )}
        </div>
    );
}

export default Oneri;
