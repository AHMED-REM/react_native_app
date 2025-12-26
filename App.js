import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenLogin from "./ScreenLogin"
import ScreenRegister from "./ScreenRegister"
import ScreenDashboard from "./ScreenDashboard"

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenDashboard">
        <Stack.Screen name="ScreenLogin"
          component={ScreenLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ScreenRegister"
          component={ScreenRegister}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ScreenDashboard"
          component={ScreenDashboard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}