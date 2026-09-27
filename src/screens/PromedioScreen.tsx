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

    const calcular = () => {
        const suma = Number(n1) + Number(n2) + Number(n3);
        setPromedio(suma / 3);
    };

    return (
        <Container>
        <Title>Promedio de 3 Números</Title>

        <Label>Número 1</Label>
        <Input keyboardType="numeric" value={n1} onChangeText={setN1} placeholder="Ej: 15" />

        <Label>Número 2</Label>
        <Input keyboardType="numeric" value={n2} onChangeText={setN2} placeholder="Ej: 20" />

        <Label>Número 3</Label>
        <Input keyboardType="numeric" value={n3} onChangeText={setN3} placeholder="Ej: 10" />

        <Button onPress={calcular}>
            <ButtonText>Calcular</ButtonText>
        </Button>

        {promedio !== null && <Result>Promedio: {promedio.toFixed(2)}</Result>}

        <Button onPress={() => navigation.goBack()}>
            <ButtonText>Volver</ButtonText>
        </Button>
        </Container>
    );
    }