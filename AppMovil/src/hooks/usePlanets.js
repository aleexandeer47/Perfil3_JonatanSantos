import { useCallback, useEffect, useState } from 'react';

// La API devuelve 10 planetas por página; con limit=20 se obtienen todos
const API_URL = 'https://dragonball-api.com/api/planets?limit=20';

export default function usePlanets() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPlanets = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`Error HTTP ${response.status}`);
      }

      const data = await response.json();
      // Los planetas vienen dentro de la propiedad "items"
      setPlanets(data.items);
    } catch {
      setError('No se pudieron cargar los planetas. Revisa tu conexión a internet.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Se ejecuta una sola vez, cuando la pantalla se muestra por primera vez
  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

  return { planets, loading, error, refetch: fetchPlanets };
}
