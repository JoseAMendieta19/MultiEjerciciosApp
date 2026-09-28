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
    navigation: NativeStackNavigationProp<RootStackParamList, "Cubo">;
};

// Función dedicada que calcula el cubo de un número real
function calcularCubo(n: number): number {
    return n ** 3;
}

export default function CuboScreen({ navigation }: Props) {
    const [numero, setNumero] = useState("");
    const [resultado, setResultado] = useState<number | null>(null);
    const [mensaje, setMensaje] = useState("");

    const calcular = () => {
        // Campo vacío
        if (!numero.trim()) {
            setMensaje("Ingrese un número.");
            setResultado(null);
            return;
        }

        const n = Number(numero);

        // Validar número
        if (Number.isNaN(n)) {
            setMensaje("Ingrese un número válido.");
            setResultado(null);
            return;
        }

        // Calcular cubo
        const cubo = calcularCubo(n);

        setResultado(cubo);
        setMensaje("");
    };

    const limpiar = () => {
        setNumero("");
        setResultado(null);
        setMensaje("");
    };

    return (
        <Container>
            <Title>Cubo de un Número</Title>

            <Label>Número</Label>

            <Input
                keyboardType="numeric"
                value={numero}
                onChangeText={(texto) => {
                    setNumero(texto);
                    setResultado(null);
                    setMensaje("");
                }}
                placeholder="Ingrese un número real"
                maxLength={10}
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

            {resultado !== null && (
                <Result>
                    {numero}³ = {resultado}
                </Result>
            )}

            <Button onPress={() => navigation.goBack()}>
                <ButtonText>Volver</ButtonText>
            </Button>
        </Container>
    );
}

