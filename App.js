import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import Menu from './components/Menu';
import SplitDetails from './components/SplitDetails';
import { SplitProvider } from './SplitContext';
 

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <SplitProvider>
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
    name="Home"
    component={Home}
    />

<Stack.Screen
    name="Menu"
    component={Menu}
    />

<Stack.Screen name="SplitDetails" 
component={SplitDetails} />
    
  </Stack.Navigator>
</NavigationContainer>
</SplitProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
