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
    Label,
} from "../components/Styled";

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Temperatura">;
};

export default function TemperaturaScreen({ navigation }: Props) {
    const [valor, setValor] = useState("");
    const [resultado, setResultado] = useState<number | null>(null);
    const [modo, setModo] = useState<"CaF" | "FaC">("CaF");
    const [mensaje, setMensaje] = useState("");

    const convertir = () => {
    if (valor.trim() === "") {
        setMensaje("Ingrese un valor de temperatura.");
        setResultado(null);
        return;
    }

    const num = Number(valor);

    if (isNaN(num)) {
        setMensaje("Ingrese un valor de temperatura válido.");
        setResultado(null);
        return;
    }

    setMensaje("");

    if (modo === "CaF") {
        setResultado((num * 9) / 5 + 32);
    } else {
        setResultado(((num - 32) * 5) / 9);
    }
    };

    const cambiarModo = () => {
    setModo(modo === "CaF" ? "FaC" : "CaF");
    setResultado(null);
    setValor("");
    };

    const limpiar = () => {
    setValor("");
    setResultado(null);
    setMensaje("");
    };

    return (
    <Container>
        <Title>Conversor de Temperatura</Title>

        <Label>
        {modo === "CaF"
            ? "Celsius → Fahrenheit"
            : "Fahrenheit → Celsius"}
        </Label>

        <Button onPress={cambiarModo}>
            <ButtonText>Cambiar dirección</ButtonText>
        </Button>

        <Input
            keyboardType="numeric"
            value={valor}
            onChangeText={setValor}
            placeholder={modo === "CaF" ? "Ingrese °C" : "Ingrese °F"}
            maxLength={10}
        />
        {mensaje !== "" && <Label>{mensaje}</Label>}
        

        <Button onPress={convertir}>
            <ButtonText>Convertir</ButtonText>
        </Button>

        {resultado !== null && (
            <Result>
            {valor}°{modo === "CaF" ? "C" : "F"} ={" "}
            {resultado.toFixed(2)}°{modo === "CaF" ? "F" : "C"}
            </Result>
        )}

        <Button onPress={limpiar}>
            <ButtonText>Limpiar</ButtonText>
        </Button>

        <Button onPress={() => navigation.goBack()}>
            <ButtonText>Volver</ButtonText>
        </Button>
    </Container>
    );
}

