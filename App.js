import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RecoilRoot } from 'recoil';

import Login from './src/screens/Login';
import Main from './src/screens/Main';

const Stack = createNativeStackNavigator();

function MainDrawer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <MainDrawer />
    </RecoilRoot>
  );
}