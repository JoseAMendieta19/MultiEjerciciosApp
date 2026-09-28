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

const PRECIO_ARRANQUE = 0.50;
const PRECIO_POR_MINUTO_RECORRIDO = 0.18;
const PRECIO_POR_MINUTO_ESPERA = 0.12;

export default function TaxiScreen({ navigation }: Props) {
    const [minutosRecorrido, setMinutosRecorrido] = useState("");
    const [minutosEspera, setMinutosEspera] = useState("");
    const [total, setTotal] = useState<number | null>(null);
    const [costoRecorrido, setCostoRecorrido] = useState<number | null>(null);
    const [costoEspera, setCostoEspera] = useState<number | null>(null);
    const [mensaje, setMensaje] = useState("");

    const calcular = () => {
        // Validar campos vacíos
        if (!minutosRecorrido.trim() && !minutosEspera.trim()) {
            setMensaje("Ingrese los minutos de recorrido y espera.");
            setTotal(null);
            return;
        }

        if (!minutosRecorrido.trim()) {
            setMensaje("Ingrese los minutos de recorrido.");
            setTotal(null);
            return;
        }

        if (!minutosEspera.trim()) {
            setMensaje("Ingrese los minutos de espera.");
            setTotal(null);
            return;
        }

        const mr = Number(minutosRecorrido);
        const me = Number(minutosEspera);

        // Validar números
        if (Number.isNaN(mr)) {
            setMensaje("Los minutos de recorrido no son válidos.");
            setTotal(null);
            return;
        }

        if (Number.isNaN(me)) {
            setMensaje("Los minutos de espera no son válidos.");
            setTotal(null);
            return;
        }

        // Validar que no sean negativos
        if (mr < 0) {
            setMensaje("Los minutos de recorrido no pueden ser negativos.");
            setTotal(null);
            return;
        }

        if (me < 0) {
            setMensaje("Los minutos de espera no pueden ser negativos.");
            setTotal(null);
            return;
        }

        // Calcular costos
        const recorrido = mr * PRECIO_POR_MINUTO_RECORRIDO;
        const espera = me * PRECIO_POR_MINUTO_ESPERA;

        const costo =
            PRECIO_ARRANQUE +
            recorrido +
            espera;

        setCostoRecorrido(recorrido);
        setCostoEspera(espera);
        setTotal(costo);
        setMensaje("");
    };

    const limpiar = () => {
        setMinutosRecorrido("");
        setMinutosEspera("");
        setCostoRecorrido(null);
        setCostoEspera(null);
        setTotal(null);
        setMensaje("");
    };

    return (
        <Container>
            <Title>Tarifa de Taxi</Title>

            <Label>Minutos de recorrido (0.18/min)</Label>
            <Input
                keyboardType="numeric"
                value={minutosRecorrido}
                onChangeText={(texto) => {
                    setMinutosRecorrido(texto);
                    setTotal(null);
                    setMensaje("");
                }}
                placeholder="Ej: 12"
                maxLength={10}
            />

            <Label>Minutos de espera (0.12/min)</Label>
            <Input
                keyboardType="numeric"
                value={minutosEspera}
                onChangeText={(texto) => {
                    setMinutosEspera(texto);
                    setTotal(null);
                    setMensaje("");
                }}
                placeholder="Ej: 5"
                maxLength={10}
            />

            <Button onPress={calcular}>
                <ButtonText>Calcular</ButtonText>
            </Button>

            <Button onPress={limpiar}>
                <ButtonText>Limpiar</ButtonText>
            </Button>

            {mensaje !== "" && (
                <Result>
                    {mensaje}
                </Result>
            )}

            {total !== null && (
                <Result>
                    Precio de arranque: $0.50{"\n"}
                    Recorrido: ${costoRecorrido?.toFixed(2)}{"\n"}
                    Espera: ${costoEspera?.toFixed(2)}{"\n"}
                    {"\n"}
                    Total a pagar: ${total.toFixed(2)}
                </Result>
            )}

            <Button onPress={() => navigation.goBack()}>
                <ButtonText>Volver</ButtonText>
            </Button>
        </Container>
    );
}