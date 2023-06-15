import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import {NativeBaseProvider} from "native-base";
import {SafeAreaProvider} from "react-native-safe-area-context";
import HubScreen from "./src/screen/Hub";
import HomeScreen from "./src/screen/Home";
import Login from "./src/screen/auth/Login";
import CameraScreen from "./src/screen/CameraScreen";


const Stack = createStackNavigator();

export default function App() {
    return (
      <NativeBaseProvider>
          <SafeAreaProvider>
              <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: true}}>
                  <Stack.Screen name="Home" component={HomeScreen} initialParams={{newHub: null}} options={{headerShown: false}}/>
                  <Stack.Screen name="Hub" component={HubScreen} options={{headerShown: false}}/>
                  <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                  <Stack.Screen name="Camera" component={CameraScreen} options={{headerShown: false}} />
                </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaProvider>
        </NativeBaseProvider>
    );
}
