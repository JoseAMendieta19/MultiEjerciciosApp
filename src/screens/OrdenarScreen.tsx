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

    const ordenar = () => {
        const numeros = [Number(n1), Number(n2), Number(n3), Number(n4)];
        const resultado = [...numeros].sort((a, b) => a - b);
        setOrdenados(resultado);
    };

    return (
        <Container>
        <Title>Ordenar Ascendente</Title>

        <Label>Número 1</Label>
        <Input keyboardType="numeric" value={n1} onChangeText={setN1} placeholder="Ej: 8" />

        <Label>Número 2</Label>
        <Input keyboardType="numeric" value={n2} onChangeText={setN2} placeholder="Ej: 3" />

        <Label>Número 3</Label>
        <Input keyboardType="numeric" value={n3} onChangeText={setN3} placeholder="Ej: 15" />

        <Label>Número 4</Label>
        <Input keyboardType="numeric" value={n4} onChangeText={setN4} placeholder="Ej: 1" />

        <Button onPress={ordenar}>
            <ButtonText>Ordenar</ButtonText>
        </Button>

        {ordenados !== null && (
            <Result>Orden ascendente:{"\n"}{ordenados.join("  →  ")}</Result>
        )}

        <Button onPress={() => navigation.goBack()}>
            <ButtonText>Volver</ButtonText>
        </Button>
        </Container>
    );
    }