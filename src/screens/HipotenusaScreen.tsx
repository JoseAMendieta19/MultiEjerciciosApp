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

    const calcular = () => {
        const a = Number(ladoA);
        const b = Number(ladoB);
        setResultado(Math.sqrt(a * a + b * b));
    };

    return (
    <Container>
        <Title>Cálculo de Hipotenusa</Title>

        <Label>Lado A</Label>
        <Input
            keyboardType="numeric"
            value={ladoA}
            onChangeText={setLadoA}
            placeholder="Ej: 3"
        />

        <Label>Lado B</Label>
        <Input
        keyboardType="numeric"
        value={ladoB}
        onChangeText={setLadoB}
        placeholder="Ej: 4"
        />

        <Button onPress={calcular}>
            <ButtonText>Calcular</ButtonText>
        </Button>

        {resultado !== null && (
            <Result>Hipotenusa: {resultado.toFixed(2)}</Result>
        )}

        <Button onPress={() => navigation.goBack()}>
            <ButtonText>Volver</ButtonText>
        </Button>
        </Container>
    );
}