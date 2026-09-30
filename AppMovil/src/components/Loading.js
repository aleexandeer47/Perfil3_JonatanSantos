import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import colors from '../theme/colors';

// Indicador de carga centrado en la pantalla
export default function Loading({ message = 'Cargando...' }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  text: {
    marginTop: 12,
    color: colors.textSecondary,
    fontSize: 16,
  },
});
