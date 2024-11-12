import React, { useState } from 'react';


function Yorumlar() {
    const [formData, setFormData] = useState({
        ad: '',
        email: '',
        yorum: '',
    });

    // Form verilerini güncelleyen işlev
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Form gönderildiğinde yapılacak işlemler
    const handleSubmit = (e) => {
        e.preventDefault();
        // Burada form verilerini işleyebilirsiniz, örneğin backend'e gönderebilirsiniz
        console.log('Form gönderildi:', formData);
        alert('Yorumunuz başarıyla gönderildi!');
        setFormData({ ad: '', email: '', yorum: '' }); // Formu temizle
    };

    return (
        <div className="container_yorumlar">
            <h2>FORM</h2>
            <form id="yorum-form" onSubmit={handleSubmit}>
                <label htmlFor="ad">Adınız:</label>
                <input
                    type="text"
                    id="ad"
                    name="ad"
                    value={formData.ad}
                    onChange={handleInputChange}
                    required
                />

                <label htmlFor="email">E-posta:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />

                <label htmlFor="yorum">Öneri ve Yorumlar:</label>
                <textarea
                    id="yorum"
                    name="yorum"
                    rows="5"
                    value={formData.yorum}
                    onChange={handleInputChange}
                    required
                ></textarea>

                <button type="submit">Gönder</button>
            </form>
        </div>
    );
}

export default Yorumlar;
