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
    navigation: NativeStackNavigationProp<RootStackParamList, "Ordenar">;
};

export default function OrdenarScreen({ navigation }: Props) {
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [n3, setN3] = useState("");
    const [n4, setN4] = useState("");

    const [ordenados, setOrdenados] = useState<number[] | null>(null);
    const [mensaje, setMensaje] = useState("");

    const ordenar = () => {
        // Validar campos vacíos
        if (!n1.trim() && !n2.trim() && !n3.trim() && !n4.trim()) {
            setMensaje("Ingrese todos los campos.");
            setOrdenados(null);
            return;
        }

        if (!n1.trim()) {
            setMensaje("Ingrese el número 1.");
            setOrdenados(null);
            return;
        }

        if (!n2.trim()) {
            setMensaje("Ingrese el número 2.");
            setOrdenados(null);
            return;
        }

        if (!n3.trim()) {
            setMensaje("Ingrese el número 3.");
            setOrdenados(null);
            return;
        }

        if (!n4.trim()) {
            setMensaje("Ingrese el número 4.");
            setOrdenados(null);
            return;
        }

        const a = Number(n1);
        const b = Number(n2);
        const c = Number(n3);
        const d = Number(n4);

        // Validar números
        if (Number.isNaN(a)) {
            setMensaje("Ingrese un valor válido para el número 1.");
            setOrdenados(null);
            return;
        }

        if (Number.isNaN(b)) {
            setMensaje("Ingrese un valor válido para el número 2.");
            setOrdenados(null);
            return;
        }

        if (Number.isNaN(c)) {
            setMensaje("Ingrese un valor válido para el número 3.");
            setOrdenados(null);
            return;
        }

        if (Number.isNaN(d)) {
            setMensaje("Ingrese un valor válido para el número 4.");
            setOrdenados(null);
            return;
        }

        const numeros = [a, b, c, d];

        const resultado = [...numeros].sort((a, b) => a - b);

        setOrdenados(resultado);
        setMensaje("");
    };

    const limpiar = () => {
        setN1("");
        setN2("");
        setN3("");
        setN4("");
        setOrdenados(null);
        setMensaje("");
    };

    return (
        <Container>
            <Title>Ordenar Ascendente</Title>

            <Label>Número 1</Label>
            <Input
                keyboardType="numeric"
                value={n1}
                onChangeText={(texto) => {
                    setN1(texto);
                    setOrdenados(null);
                    setMensaje("");
                }}
                placeholder="Ej: 8"
                maxLength={10}
            />

            <Label>Número 2</Label>
            <Input
                keyboardType="numeric"
                value={n2}
                onChangeText={(texto) => {
                    setN2(texto);
                    setOrdenados(null);
                    setMensaje("");
                }}
                placeholder="Ej: 3"
                maxLength={10}
            />

            <Label>Número 3</Label>
            <Input
                keyboardType="numeric"
                value={n3}
                onChangeText={(texto) => {
                    setN3(texto);
                    setOrdenados(null);
                    setMensaje("");
                }}
                placeholder="Ej: 15"
                maxLength={10}
            />

            <Label>Número 4</Label>
            <Input
                keyboardType="numeric"
                value={n4}
                onChangeText={(texto) => {
                    setN4(texto);
                    setOrdenados(null);
                    setMensaje("");
                }}
                placeholder="Ej: 1"
                maxLength={10}
            />

            <Button onPress={ordenar}>
                <ButtonText>Ordenar</ButtonText>
            </Button>

            <Button onPress={limpiar}>
                <ButtonText>Limpiar</ButtonText>
            </Button>

            {mensaje !== "" && (
                <Result>
                    {mensaje}
                </Result>
            )}

            {ordenados !== null && (
                <Result>
                    Orden ascendente:{"\n"}
                    {ordenados.join("  →  ")}
                </Result>
            )}

            <Button onPress={() => navigation.goBack()}>
                <ButtonText>Volver</ButtonText>
            </Button>
        </Container>
    );
}

