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
    navigation: NativeStackNavigationProp<RootStackParamList, "Temperatura">;
};

export default function TemperaturaScreen({ navigation }: Props) {
    const [valor, setValor] = useState("");
    const [resultado, setResultado] = useState<number | null>(null);
    const [modo, setModo] = useState<"CaF" | "FaC">("CaF");

    const convertir = () => {
    const num = Number(valor);
    if (modo === "CaF") {
      setResultado(num * 9 / 5 + 32);
    } else {
      setResultado((num - 32) * 5 / 9);
    }
    };

    return (
    <Container>
        <Title>Celsius ↔ Fahrenheit</Title>

        <Label>
        Modo actual: {modo === "CaF" ? "Celsius → Fahrenheit" : "Fahrenheit → Celsius"}
        </Label>

        <Button onPress={() => setModo(modo === "CaF" ? "FaC" : "CaF")}>
        <ButtonText>Cambiar dirección</ButtonText>
        </Button>

        <Input
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
        placeholder={modo === "CaF" ? "Ingrese °C" : "Ingrese °F"}
        />

        <Button onPress={convertir}>
        <ButtonText>Convertir</ButtonText>
        </Button>

        {resultado !== null && (
        <Result>Resultado: {resultado.toFixed(2)} {modo === "CaF" ? "°F" : "°C"}</Result>
        )}

        <Button onPress={() => navigation.goBack()}>
        <ButtonText>Volver</ButtonText>
        </Button>
    </Container>
    );
}