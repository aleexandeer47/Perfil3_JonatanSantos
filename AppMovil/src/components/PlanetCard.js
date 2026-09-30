import { Image, StyleSheet, Text, View } from 'react-native';

import colors from '../theme/colors';

// Tarjeta que muestra la información de un planeta
export default function PlanetCard({ planet }) {
  return (
    <View style={styles.card}>
      {planet.image ? (
        // encodeURI evita problemas con URLs que traen espacios
        <Image source={{ uri: encodeURI(planet.image) }} style={styles.image} />
      ) : null}

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{planet.name}</Text>
          <View style={[styles.badge, planet.isDestroyed ? styles.destroyed : styles.intact]}>
            <Text style={styles.badgeText}>
              {planet.isDestroyed ? 'Destruido' : 'Intacto'}
            </Text>
          </View>
        </View>

        {planet.description ? (
          <Text style={styles.description}>{planet.description}</Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
    backgroundColor: colors.border,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  name: {
    flex: 1,
    color: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 12,
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  destroyed: {
    backgroundColor: colors.danger,
  },
  intact: {
    backgroundColor: colors.success,
  },
  badgeText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: 'bold',
  },
  description: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
});
