import { useState, useEffect } from "react";

const API_KEY = "pub_7760523a91d0291581f48901ff904d99a9f4c"; // Substitua pela sua chave
const API_URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=technology&language=pt`;

function useNoticias() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarNoticias() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.status === "success") {
          setNoticias(data.results);

          // console.log("Notícias carregadas:", data.results); // 🔍 Adicionando log para ver quantas notícias chegam

        } else {
          console.error("Erro na resposta da API:", data);
        }
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      } finally {
        setLoading(false);
      }
    }

    buscarNoticias();
  }, []);

  return { noticias, loading };
}

export default useNoticias;
