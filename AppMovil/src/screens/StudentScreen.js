import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PrimaryButton from '../components/PrimaryButton';
import colors from '../theme/colors';

const student = {
  name: 'Jonatan Alexander Santos Morales',
  carnet: '20230633',
  section: 'A2',
};

export default function StudentScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('../../assets/splash.png')} style={styles.logo} />
        <Text style={styles.title}>Dragon Ball</Text>
        <Text style={styles.subtitle}>Planetas del universo</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Nombre</Text>
          <Text style={styles.value}>{student.name}</Text>

          <View style={styles.divider} />

          <Text style={styles.label}>Carnet</Text>
          <Text style={styles.value}>{student.carnet}</Text>

          <View style={styles.divider} />

          <Text style={styles.label}>Sección</Text>
          <Text style={styles.value}>{student.section}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Ver planetas"
            onPress={() => navigation.navigate('Planets')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  title: {
    color: colors.primary,
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
    marginBottom: 32,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    borderTopWidth: 4,
    borderTopColor: colors.primary,
    padding: 24,
  },
  label: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  value: {
    color: colors.text,
    fontSize: 18,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 16,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 420,
    marginTop: 32,
  },
});
