import { StyleSheet, Text, View } from 'react-native';

import colors from '../theme/colors';
import PrimaryButton from './PrimaryButton';

// Mensaje de error con un botón para volver a intentar
export default function ErrorMessage({ message, onRetry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Ups! Algo salió mal</Text>
      <Text style={styles.message}>{message}</Text>
      <PrimaryButton title="Intentar nuevamente" onPress={onRetry} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: colors.background,
  },
  title: {
    color: colors.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  message: {
    color: colors.textSecondary,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
});
