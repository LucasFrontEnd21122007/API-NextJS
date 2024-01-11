// Exemplo em Next.js pages/index.js

import { useEffect, useState } from 'react';

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')  // Acesse a API ASP.NET Core usando a rota definida
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default Home;