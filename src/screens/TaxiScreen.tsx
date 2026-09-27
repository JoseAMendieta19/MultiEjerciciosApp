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
    navigation: NativeStackNavigationProp<RootStackParamList, "Taxi">;
    };

    const PRECIO_ARRANQUE = 0.5;
    const PRECIO_POR_MINUTO_RECORRIDO = 0.18;
    const PRECIO_POR_MINUTO_ESPERA = 0.12;

    export default function TaxiScreen({ navigation }: Props) {
    const [minutosRecorrido, setMinutosRecorrido] = useState("");
    const [minutosEspera, setMinutosEspera] = useState("");
    const [total, setTotal] = useState<number | null>(null);

    const calcular = () => {
        const mr = Number(minutosRecorrido);
        const me = Number(minutosEspera);

        const costo =
        PRECIO_ARRANQUE +
        mr * PRECIO_POR_MINUTO_RECORRIDO +
        me * PRECIO_POR_MINUTO_ESPERA;

        setTotal(costo);
    };

    return (
        <Container>
        <Title>Tarifa de Taxi</Title>

        <Label>Minutos de recorrido</Label>
        <Input
            keyboardType="numeric"
            value={minutosRecorrido}
            onChangeText={setMinutosRecorrido}
            placeholder="Ej: 12"
        />

        <Label>Minutos de espera</Label>
        <Input
            keyboardType="numeric"
            value={minutosEspera}
            onChangeText={setMinutosEspera}
            placeholder="Ej: 5"
        />

        <Button onPress={calcular}>
            <ButtonText>Calcular</ButtonText>
        </Button>

        {total !== null && <Result>Total a pagar: ${total.toFixed(2)}</Result>}

        <Button onPress={() => navigation.goBack()}>
            <ButtonText>Volver</ButtonText>
        </Button>
        </Container>
    );
    }