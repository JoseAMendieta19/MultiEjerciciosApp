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
    navigation: NativeStackNavigationProp<RootStackParamList, "Hipotenusa">;
};

export default function HipotenusaScreen({ navigation }: Props) {
    const [ladoA, setLadoA] = useState("");
    const [ladoB, setLadoB] = useState("");
    const [resultado, setResultado] = useState<number | null>(null);
    const [mensaje, setMensaje] = useState("");

    const calcular = () => {
        // Validar campos vacíos
        if (!ladoA.trim() && !ladoB.trim()) {
            setMensaje("Ingrese todos los campos.");
            setResultado(null);
            return;
        }

        if (!ladoA.trim()) {
            setMensaje("Ingrese el lado A.");
            setResultado(null);
            return;
        }

        if (!ladoB.trim()) {
            setMensaje("Ingrese el lado B.");
            setResultado(null);
            return;
        }

        const a = Number(ladoA);
        const b = Number(ladoB);

        // Validar números
        if (Number.isNaN(a)) {
            setMensaje("Ingrese un valor válido para el lado A.");
            setResultado(null);
            return;
        }

        if (Number.isNaN(b)) {
            setMensaje("Ingrese un valor válido para el lado B.");
            setResultado(null);
            return;
        }

        // Los lados deben ser mayores que 0
        if (a <= 0) {
            setMensaje("El lado A debe ser mayor que 0.");
            setResultado(null);
            return;
        }

        if (b <= 0) {
            setMensaje("El lado B debe ser mayor que 0.");
            setResultado(null);
            return;
        }

        // Fórmula de la hipotenusa
        const hipotenusa = Math.sqrt(a * a + b * b);

        setResultado(hipotenusa);
        setMensaje("");
    };

    const limpiar = () => {
        setLadoA("");
        setLadoB("");
        setResultado(null);
        setMensaje("");
    };

    return (
        <Container>
            <Title>Cálculo de Hipotenusa</Title>

            <Label>Lado A</Label>
            <Input
                keyboardType="decimal-pad"
                value={ladoA}
                onChangeText={(texto) => {
                    setLadoA(texto);
                    setResultado(null);
                    setMensaje("");
                }}
                placeholder="Ej: 3"
                maxLength={10}
            />

            <Label>Lado B</Label>
            <Input
                keyboardType="decimal-pad"
                value={ladoB}
                onChangeText={(texto) => {
                    setLadoB(texto);
                    setResultado(null);
                    setMensaje("");
                }}
                placeholder="Ej: 4"
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
                    Fórmula: √(A² + B²) {"\n"}
                    Hipotenusa: {resultado.toFixed(2)}
                </Result>
            )}

            <Button onPress={() => navigation.goBack()}>
                <ButtonText>Volver</ButtonText>
            </Button>
        </Container>
    );
}

