import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

/**
 * Componente principal do aplicativo. Ele solicita permissão para utilizar
 * a câmera e, uma vez concedida, exibe a visualização da câmera com um
 * overlay de texto estático. Este overlay simula um rótulo de realidade
 * aumentada que poderia ser substituído por dados dinâmicos de pontos
 * turísticos próximos.
 */
export default function App() {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View style={styles.center}><Text>Solicitando permissão...</Text></View>;
  }
  if (hasPermission === false) {
    return <View style={styles.center}><Text>Permissão para acessar a câmera negada.</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={Camera.Constants.Type.back}>
        {/* Overlay de realidade aumentada. Em versões futuras, este elemento
            poderá ser substituído por componentes mais sofisticados que
            consultem dados de localização e exibam informações contextuais. */}
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>Ponto Turístico!</Text>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  overlayText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
