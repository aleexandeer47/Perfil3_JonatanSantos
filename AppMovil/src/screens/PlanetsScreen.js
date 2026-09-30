import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';
import PlanetCard from '../components/PlanetCard';
import usePlanets from '../hooks/usePlanets';
import colors from '../theme/colors';

export default function PlanetsScreen() {
  const { planets, loading, error, refetch } = usePlanets();

  if (loading) {
    return <Loading message="Cargando planetas..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  return (
    // El encabezado de navegación ya cubre el borde superior
    <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
      <FlatList
        data={planets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PlanetCard planet={item} />}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {
    padding: 16,
  },
});
