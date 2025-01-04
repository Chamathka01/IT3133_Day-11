import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home'
        screenOptions={{
          headerStyle: { backgroundColor: '#e2bee2' },
        }}
      >
  </NavigationContainer>
  </SafeAreaProvider>
  );
}


