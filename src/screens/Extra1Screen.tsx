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
    navigation: NativeStackNavigationProp<RootStackParamList, "Extra1">;
};

export default function Extra1Screen({ navigation }: Props) {
    const [valor, setValor] = useState("");
    const [resultado, setResultado] = useState<number | null>(null);
    const [modo, setModo] = useState<"Km" | "m">("Km");
    const [mensaje, setMensaje] = useState("");

    const convertir = () => {
    if (valor.trim() === "") {
        setMensaje("Ingrese un valor de distancia.");
        setResultado(null);
        return;
    }

    const num = Number(valor);

    if (isNaN(num)) {
        setMensaje("Ingrese un valor de distancia válido.");
        setResultado(null);
        return;
    }

    setMensaje("");

    if (modo === "Km") {
        setResultado(num * 1000);
    } else {
        setResultado(num * 0.001);
    }
    };

    const cambiarModo = () => {
    setModo(modo === "Km" ? "m" : "Km");
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
        <Title>Conversor de Distancia</Title>

        <Label>
        {modo === "Km"
            ? "Kilómetros → Metros"
            : "Metros  → Kilómetros"}
        </Label>

        <Button onPress={cambiarModo}>
            <ButtonText>Cambiar dirección</ButtonText>
        </Button>

        <Input
            keyboardType="numeric"
            value={valor}
            onChangeText={setValor}
            placeholder={modo === "Km" ? "Ingrese km" : "Ingrese m"}
            maxLength={10}
        />
        {mensaje !== "" && <Label>{mensaje}</Label>}
        

        <Button onPress={convertir}>
            <ButtonText>Convertir</ButtonText>
        </Button>

        {resultado !== null && (
            <Result>
            {valor} {modo === "Km" ? "km" : "m"} ={" "}
            {resultado.toFixed(3)} {modo === "Km" ? "m" : "km"}
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

