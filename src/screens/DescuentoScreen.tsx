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
    const [mensaje, setMensaje] = useState("");

    const calcular = () => {
        const p = Number(precio);
        const d = Number(descuento);

        if (!precio && !descuento) {
            setMensaje("Ingrese todos los campos.");
            setPrecioFinal(null);
            setAhorro(null);
            return;
        }

        if (!precio) {
            setMensaje("Ingrese el precio.");
            setPrecioFinal(null);
            setAhorro(null);
            return;
        }

        if (!descuento) {
            setMensaje("Ingrese el descuento.");
            setPrecioFinal(null);
            setAhorro(null);
            return;
        }

        if (Number.isNaN(p) || Number.isNaN(d) || p <= 0 || d <= 0) {
            setMensaje("Ingrese valores válidos mayores que 0.");
            setPrecioFinal(null);
            setAhorro(null);
            return;
        }

        if (d > 100) {
            setMensaje("El descuento no puede ser mayor al 100%.");
            setPrecioFinal(null);
            setAhorro(null);
            return;
        }

        const montoAhorro = p * (d / 100);
        const resultado = p - montoAhorro;

        setAhorro(montoAhorro);
        setPrecioFinal(resultado);
        setMensaje("");
    };

    const limpiar = () => {
        setPrecio("");
        setDescuento("");
        setPrecioFinal(null);
        setAhorro(null);
        setMensaje("");
    };

    return (
        <Container>
            <Title>Descuento de Producto</Title>

            <Label>Precio original ($)</Label>
            <Input
                keyboardType="decimal-pad"
                value={precio}
                onChangeText={setPrecio}
                placeholder="Ej: 50"
                maxLength={10}
            />

            <Label>Descuento (%)</Label>
            <Input
                keyboardType="decimal-pad"
                value={descuento}
                onChangeText={setDescuento}
                placeholder="Ej: 20"
                maxLength={5}
            />

            <Button onPress={calcular}>
                <ButtonText>Calcular</ButtonText>
            </Button>

            <Button onPress={limpiar}>
                <ButtonText>Limpiar</ButtonText>
            </Button>

            {mensaje !== "" && (
                <Result>
                    {mensaje}
                </Result>
            )}

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