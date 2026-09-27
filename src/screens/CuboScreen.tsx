import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import {
    Container,
    Title,
    Input,
    Button,
    ButtonText,
    Result
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

    const calcular = () => {
        const n = Number(numero);
        setResultado(calcularCubo(n));
    };

    return (
        <Container>
        <Title>Cubo de un Número</Title>

        <Input
            keyboardType="numeric"
            value={numero}
            onChangeText={setNumero}
            placeholder="Ingrese un número real"
        />

        <Button onPress={calcular}>
            <ButtonText>Calcular</ButtonText>
        </Button>

        {resultado !== null && <Result>{numero}³ = {resultado}</Result>}

        <Button onPress={() => navigation.goBack()}>
            <ButtonText>Volver</ButtonText>
        </Button>
        </Container>
    );
    }