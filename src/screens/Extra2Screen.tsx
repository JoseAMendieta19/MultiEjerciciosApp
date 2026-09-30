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
    navigation: NativeStackNavigationProp<RootStackParamList, "Extra2">;
};

export default function Extra2Screen({ navigation }: Props) {
    const [valor, setValor] = useState("");
    const [resultado, setResultado] = useState<number | null>(null);
    const [modo, setModo] = useState<"L" | "gal">("L");
    const [mensaje, setMensaje] = useState("");

    const convertir = () => {
    if (valor.trim() === "") {
        setMensaje("Ingrese un valor de Volumen");
        setResultado(null);
        return;
    }

    const num = Number(valor);

    if (isNaN(num)) {
        setMensaje("Ingrese un valor de Volumen válido.");
        setResultado(null);
        return;
    }

    setMensaje("");

    if (modo === "L") {
        setResultado(num * 0.264172);
    } else {
        setResultado(num * 3.78541);
    }
    };

    const cambiarModo = () => {
    setModo(modo === "L" ? "gal" : "L");
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
        {modo === "L"
            ? "Litros → Galones"
            : "Galones  → Litros"}
        </Label>

        <Button onPress={cambiarModo}>
            <ButtonText>Cambiar dirección</ButtonText>
        </Button>

        <Input
            keyboardType="numeric"
            value={valor}
            onChangeText={setValor}
            placeholder={modo === "L" ? "Ingrese litros" : "Ingrese galones"}
            maxLength={10}
        />
        {mensaje !== "" && <Label>{mensaje}</Label>}
        

        <Button onPress={convertir}>
            <ButtonText>Convertir</ButtonText>
        </Button>

        {resultado !== null && (
            <Result>
            {valor} {modo === "L" ? "L" : "gal"} ={" "}
            {resultado.toFixed(3)} {modo === "L" ? "gal" : "L"}
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

