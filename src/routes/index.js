import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./../screens/Home";
import Onboarding from './../screens/Onboarding';

const InitialStack = createNativeStackNavigator();

export const InitialNavigator = ()=>{
    <InitialStack.Navigator>
        <InitialStack.Screen 
            name="Onboarding"
            component={Onboarding}
        />
        <InitialStack.Screen 
            name="Home"
            component={Home}
        />
    </InitialStack.Navigator>
}