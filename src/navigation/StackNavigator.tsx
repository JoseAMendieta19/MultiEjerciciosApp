import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import TemperaturaScreen from "../screens/TemperaturaScreen";
import IMCScreen from "../screens/IMCScreen";
import DescuentoScreen from "../screens/DescuentoScreen";
import MonedasScreen from "../screens/MonedasScreen";
import HipotenusaScreen from "../screens/HipotenusaScreen";
import SignoNumeroScreen from "../screens/SignoNumeroScreen";
import OrdenarScreen from "../screens/OrdenarScreen";
import CuboScreen from "../screens/CuboScreen";
import PromedioScreen from "../screens/PromedioScreen";
import TaxiScreen from "../screens/TaxiScreen";

import { RootStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Menú Principal" }} />
        <Stack.Screen name="Temperatura" component={TemperaturaScreen} />
        <Stack.Screen name="IMC" component={IMCScreen} />
        <Stack.Screen name="Descuento" component={DescuentoScreen} />
        <Stack.Screen name="Monedas" component={MonedasScreen} />
        <Stack.Screen name="Hipotenusa" component={HipotenusaScreen} />
        <Stack.Screen name="SignoNumero" component={SignoNumeroScreen} />
        <Stack.Screen name="Ordenar" component={OrdenarScreen} />
        <Stack.Screen name="Cubo" component={CuboScreen} />
        <Stack.Screen name="Promedio" component={PromedioScreen} />
        <Stack.Screen name="Taxi" component={TaxiScreen} />
    </Stack.Navigator>
    );
}