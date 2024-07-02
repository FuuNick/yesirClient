import React, { useState, useEffect } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('https://yesir-server.vercel.app/hello')
            .then(res => res.json())
            .then(data => setMessage(data.message))
            .catch(err => console.error('Error fetching message:', err));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>{message} MANTAP</h1>
            </header>
        </div>
    );
}

export default App;
