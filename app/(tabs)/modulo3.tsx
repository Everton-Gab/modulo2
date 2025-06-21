import { useState } from 'react';

type Usuario = [
    id: number,
    name: string,
];

export default function Modulo3() 
    const [carregando, setCarregando] = useState(false);
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [visivel, setVisivel] = useState(false);

    const carregarUsuarios = async () => {
        if (visivel) {
            setVisivel(false); // Oculta a lista se já estiver visível
            return;
        }

        setCarregando(true);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsuarios(data);
            setVisivel(true); // Mostra a lista após carregar
        } catch (error) { 
            console.error('Erro ao carregar usuários', error);
        } finally {
            setCarregando(false);
        }
    }
  

   