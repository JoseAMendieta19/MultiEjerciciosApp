import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import {
  MenuContainer,
  MenuContent,
  MenuTitle,
  Card,
  CardText,
  CardIcon
} from "../components/MenuStyled";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

const ejercicios: {
  label: string;
  icon: string;
  route: keyof RootStackParamList;
}[] = [
  { label: "1. Celsius -- Fahrenheit", icon: "", route: "Temperatura" },
  { label: "2. Índice de Masa Corporal", icon: "", route: "IMC" },
  { label: "3. Descuento", icon: "", route: "Descuento" },
  { label: "4. Conversor de Monedas", icon: "", route: "Monedas" },
  { label: "5. Hipotenusa", icon: "", route: "Hipotenusa" },
  { label: "6. Positivo o Negativo", icon: "", route: "SignoNumero" },
  { label: "7. Ordenar Ascendente", icon: "", route: "Ordenar" },
  { label: "8. Cubo de un Número", icon: "", route: "Cubo" },
  { label: "9. Promedio de 3", icon: "", route: "Promedio" },
  { label: "10. Tarifa de Taxi", icon: "", route: "Taxi" },
];

export default function HomeScreen({ navigation }: Props) {
  return (
    <MenuContainer>
      <MenuTitle>Multi-Ejercicios</MenuTitle>
      <MenuContent>
        {ejercicios.map((ej) => (
          <Card key={ej.route} onPress={() => navigation.push(ej.route)}>
            <CardText>{ej.label}</CardText>
          </Card>
        ))}
      </MenuContent>
    </MenuContainer>
  );
}