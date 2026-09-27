import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import {
    Container,
    Title,
    Input,
    Button,
    ButtonText,
    Result,
    Label
} from "../components/Styled";

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Descuento">;
};

export default function DescuentoScreen({ navigation }: Props) {
    const [precio, setPrecio] = useState("");
    const [descuento, setDescuento] = useState("");
    const [precioFinal, setPrecioFinal] = useState<number | null>(null);
    const [ahorro, setAhorro] = useState<number | null>(null);

    const calcular = () => {
    const p = Number(precio);
    const d = Number(descuento);
    const montoAhorro = p * (d / 100);

    setAhorro(montoAhorro);
    setPrecioFinal(p - montoAhorro);
    };

    return (
    <Container>
        <Title>Descuento de Producto</Title>

        <Label>Precio original ($)</Label>
        <Input
        keyboardType="numeric"
        value={precio}
        onChangeText={setPrecio}
        placeholder="Ej: 50"
        />

        <Label>Descuento (%)</Label>
        <Input
        keyboardType="numeric"
        value={descuento}
        onChangeText={setDescuento}
        placeholder="Ej: 20"
        />

        <Button onPress={calcular}>
        <ButtonText>Calcular</ButtonText>
        </Button>

        {precioFinal !== null && ahorro !== null && (
        <Result>
            Ahorras: ${ahorro.toFixed(2)}{"\n"}
            Precio final: ${precioFinal.toFixed(2)}
        </Result>
        )}

        <Button onPress={() => navigation.goBack()}>
        <ButtonText>Volver</ButtonText>
        </Button>
    </Container>
    );
}