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
    navigation: NativeStackNavigationProp<RootStackParamList, "Promedio">;
};

export default function PromedioScreen({ navigation }: Props) {
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [n3, setN3] = useState("");
    const [promedio, setPromedio] = useState<number | null>(null);
    const [mensaje, setMensaje] = useState("");

    const calcular = () => {
        // Validar campos vacíos
        if (!n1.trim() && !n2.trim() && !n3.trim()) {
            setMensaje("Ingrese todos los números.");
            setPromedio(null);
            return;
        }

        if (!n1.trim()) {
            setMensaje("Ingrese el número 1.");
            setPromedio(null);
            return;
        }

        if (!n2.trim()) {
            setMensaje("Ingrese el número 2.");
            setPromedio(null);
            return;
        }

        if (!n3.trim()) {
            setMensaje("Ingrese el número 3.");
            setPromedio(null);
            return;
        }

        const num1 = Number(n1);
        const num2 = Number(n2);
        const num3 = Number(n3);

        // Validar que sean números
        if (Number.isNaN(num1)) {
            setMensaje("El número 1 no es válido.");
            setPromedio(null);
            return;
        }

        if (Number.isNaN(num2)) {
            setMensaje("El número 2 no es válido.");
            setPromedio(null);
            return;
        }

        if (Number.isNaN(num3)) {
            setMensaje("El número 3 no es válido.");
            setPromedio(null);
            return;
        }

        // Calcular promedio
        const suma = num1 + num2 + num3;
        const resultado = suma / 3;

        setPromedio(resultado);
        setMensaje("");
    };

    const limpiar = () => {
        setN1("");
        setN2("");
        setN3("");
        setPromedio(null);
        setMensaje("");
    };

    return (
        <Container>
            <Title>Promedio de 3 Números</Title>

            <Label>Número 1</Label>
            <Input
                keyboardType="numeric"
                value={n1}
                onChangeText={(texto) => {
                    setN1(texto);
                    setPromedio(null);
                    setMensaje("");
                }}
                placeholder="Ej: 15"
                maxLength={10}
            />

            <Label>Número 2</Label>
            <Input
                keyboardType="numeric"
                value={n2}
                onChangeText={(texto) => {
                    setN2(texto);
                    setPromedio(null);
                    setMensaje("");
                }}
                placeholder="Ej: 20"
                maxLength={10}
            />

            <Label>Número 3</Label>
            <Input
                keyboardType="numeric"
                value={n3}
                onChangeText={(texto) => {
                    setN3(texto);
                    setPromedio(null);
                    setMensaje("");
                }}
                placeholder="Ej: 10"
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

            {promedio !== null && (
                <Result>
                    Promedio: {promedio.toFixed(2)}
                </Result>
            )}

            <Button onPress={() => navigation.goBack()}>
                <ButtonText>Volver</ButtonText>
            </Button>
        </Container>
    );
}