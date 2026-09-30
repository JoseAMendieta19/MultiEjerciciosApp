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
    navigation: NativeStackNavigationProp<RootStackParamList, "Extra3">;
};

export default function Extra3Screen({ navigation }: Props) {
    const [valor, setValor] = useState("");
    const [resultado, setResultado] = useState<number | null>(null);
    const [modo, setModo] = useState<"lb" | "q">("lb");
    const [mensaje, setMensaje] = useState("");

    const convertir = () => {
    if (valor.trim() === "") {
        setMensaje("Ingrese un valor de Peso");
        setResultado(null);
        return;
    }

    const num = Number(valor);

    if (isNaN(num)) {
        setMensaje("Ingrese un valor de Libra válido.");
        setResultado(null);
        return;
    }

    setMensaje("");

    if (modo === "lb") {
        setResultado(num * 0.00453592);
    } else {
        setResultado(num * 220.462);
    }
    };

    const cambiarModo = () => {
    setModo(modo === "lb" ? "q" : "lb");
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
        <Title>Conversor de Peso</Title>

        <Label>
        {modo === "lb"
            ? "Libras → Quintales"
            : "Quintales  → Libras"}
        </Label>

        <Button onPress={cambiarModo}>
            <ButtonText>Cambiar dirección</ButtonText>
        </Button>

        <Input
            keyboardType="numeric"
            value={valor}
            onChangeText={setValor}
            placeholder={modo === "lb" ? "Ingrese libras" : "Ingrese quintales"}
            maxLength={10}
        />
        {mensaje !== "" && <Label>{mensaje}</Label>}
        

        <Button onPress={convertir}>
            <ButtonText>Convertir</ButtonText>
        </Button>

        {resultado !== null && (
            <Result>
            {valor} {modo === "lb" ? "lb" : "q"} ={" "}
            {resultado.toFixed(3)} {modo === "lb" ? "q" : "lb"}
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

