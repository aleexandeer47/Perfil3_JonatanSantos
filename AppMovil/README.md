# Dragon Ball Planetas

Aplicación móvil hecha con Expo + React Native + JavaScript para la evaluación del
**Módulo 5: Desarrollo de componentes para dispositivos móviles**.

- **Estudiante:** Jonatan Alexander Santos Morales
- **Carnet:** 20230633
- **Sección:** A2
- **Docente:** Daniel Wilfredo Granados Hernández

## Qué hace

1. Muestra un Splash Screen personalizado (esfera del dragón).
2. Pantalla 1: información del estudiante y botón "Ver planetas".
3. Pantalla 2: lista de planetas obtenida de `https://dragonball-api.com/api/planets`.

## Estructura

```
AppMovil/
├── assets/
│   ├── icon.png            Icono de la aplicación
│   ├── adaptive-icon.png   Icono adaptable de Android (esfera sin fondo)
│   └── splash.png          Imagen del Splash Screen
├── src/
│   ├── components/
│   │   ├── ErrorMessage.js   Mensaje de error con botón para reintentar
│   │   ├── Loading.js        Indicador de carga
│   │   ├── PlanetCard.js     Tarjeta de un planeta
│   │   └── PrimaryButton.js  Botón naranja reutilizable
│   ├── hooks/
│   │   └── usePlanets.js     Custom Hook que consume la API
│   ├── screens/
│   │   ├── StudentScreen.js  Pantalla 1: datos del estudiante
│   │   └── PlanetsScreen.js  Pantalla 2: lista de planetas
│   └── theme/
│       └── colors.js         Paleta de colores
├── App.js       Navegación (React Navigation)
├── index.js     Punto de entrada: registra App
├── app.json     Configuración de Expo (icono, splash, paquete Android)
├── eas.json     Perfil de compilación para generar el .apk
└── package.json
```

## Ejecutar el proyecto

```bash
npm install
npx expo start
```

Para probar en Android: instalar **Expo Go** en el teléfono y escanear el código QR,
o presionar `a` en la terminal con un emulador abierto.

> El Splash Screen y el icono personalizados se ven en el `.apk`. En Expo Go se
> muestra el icono y la pantalla de carga de Expo Go.

## Generar el APK

```bash
npm install -g eas-cli
eas login
eas build -p android --profile preview
```

El perfil `preview` de `eas.json` usa `"buildType": "apk"`, por lo que el resultado
es un archivo `.apk` instalable. Al terminar, EAS muestra un enlace para descargarlo.
