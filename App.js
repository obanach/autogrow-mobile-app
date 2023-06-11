import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/screen/Home";
import Login from "./src/screen/auth/Login";
import {NativeBaseProvider} from "native-base";
import {SafeAreaProvider} from "react-native-safe-area-context";


const Stack = createStackNavigator();

export default function App() {
  return (
      <NativeBaseProvider>
          <SafeAreaProvider>
              <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: true}}>
                  <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                  <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaProvider>
        </NativeBaseProvider>
  );
}
