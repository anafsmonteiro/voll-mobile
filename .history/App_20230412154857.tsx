import Principal from './src/Login';
import { NativeBaseProvider, StatusBar } from 'native-base'

import { TEMAS } from './src/estilos/temas'

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />      
      <Logiin />
    </NativeBaseProvider>
  );
}
