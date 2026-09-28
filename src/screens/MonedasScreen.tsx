import { useState } from "react";
import { StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Picker } from "@react-native-picker/picker";

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
    navigation: NativeStackNavigationProp<RootStackParamList, "Monedas">;
};

// Tasas de cambio respecto a 1 USD
const tasas: {
    nombre: string;
    codigo: string;
    valor: number;
}[] = [
    {
        nombre: "Dólar Estadounidense",
        codigo: "USD",
        valor: 1,
    },
    {
        nombre: "Euro",
        codigo: "EUR",
        valor: 0.92,
    },
    {
        nombre: "Yen Japonés",
        codigo: "JPY",
        valor: 149.5,
    },
    {
        nombre: "Peso Colombiano",
        codigo: "COP",
        valor: 4050,
    },
    {
        nombre: "Sol Peruano",
        codigo: "PEN",
        valor: 3.75,
    },
];

export default function MonedasScreen({ navigation }: Props) {
    const [monto, setMonto] = useState("");

    // Empiezan sin moneda seleccionada
    const [monedaOrigen, setMonedaOrigen] = useState("");
    const [monedaDestino, setMonedaDestino] = useState("");

    const [resultado, setResultado] = useState<number | null>(null);
    const [mensaje, setMensaje] = useState("");

    // =========================
    // CONVERTIR
    // =========================
    const convertir = () => {
        // Validar moneda de origen
        if (!monedaOrigen) {
            setMensaje("Seleccione la moneda de origen.");
            setResultado(null);
            return;
        }

        // Validar moneda de destino
        if (!monedaDestino) {
            setMensaje("Seleccione la moneda de destino.");
            setResultado(null);
            return;
        }

        // Validar monto vacío
        if (!monto.trim()) {
            setMensaje("Ingrese el monto.");
            setResultado(null);
            return;
        }

        const m = Number(monto);

        // Validar monto
        if (Number.isNaN(m) || m <= 0) {
            setMensaje("Ingrese un monto válido mayor que 0.");
            setResultado(null);
            return;
        }

        const origen = tasas.find(
            (t) => t.codigo === monedaOrigen
        );

        const destino = tasas.find(
            (t) => t.codigo === monedaDestino
        );

        if (!origen || !destino) {
            setMensaje("Seleccione monedas válidas.");
            setResultado(null);
            return;
        }

        // Misma moneda
        if (origen.codigo === destino.codigo) {
            setResultado(m);
            setMensaje("");
            return;
        }

        // Convertir primero a USD
        const montoEnUSD = m / origen.valor;

        // Convertir de USD a moneda destino
        const resultadoFinal =
            montoEnUSD * destino.valor;

        setResultado(resultadoFinal);
        setMensaje("");
    };

    // =========================
    // LIMPIAR
    // =========================
    const limpiar = () => {
        setMonto("");
        setMonedaOrigen("");
        setMonedaDestino("");
        setResultado(null);
        setMensaje("");
    };

    return (
        <Container>
            <Title>Conversor de Monedas</Title>

            {/* MONEDA DE ORIGEN */}
            <Label>Moneda de origen:</Label>

            <Picker
                style={styles.picker}
                selectedValue={monedaOrigen}
                onValueChange={(codigo) => {
                    setMonedaOrigen(codigo);
                    setResultado(null);
                    setMensaje("");
                }}
            >
                <Picker.Item
                    label="Seleccione una moneda"
                    value=""
                />

                {tasas.map((t) => (
                    <Picker.Item
                        key={t.codigo}
                        label={`${t.nombre} (${t.codigo})`}
                        value={t.codigo}
                    />
                ))}
            </Picker>

            {/* MONTO */}
            <Label>Monto:</Label>

            <Input
                keyboardType="decimal-pad"
                value={monto}
                onChangeText={(texto) => {
                    setMonto(texto);
                    setResultado(null);
                    setMensaje("");
                }}
                placeholder="Ej: 100"
                maxLength={10}
            />

            {/* MONEDA DE DESTINO */}
            <Label>Moneda de destino:</Label>

            <Picker
                style={styles.picker}
                selectedValue={monedaDestino}
                onValueChange={(codigo) => {
                    setMonedaDestino(codigo);
                    setResultado(null);
                    setMensaje("");
                }}
            >
                <Picker.Item
                    label="Seleccione una moneda"
                    value=""
                />

                {tasas.map((t) => (
                    <Picker.Item
                        key={t.codigo}
                        label={`${t.nombre} (${t.codigo})`}
                        value={t.codigo}
                    />
                ))}
            </Picker>

            {/* CONVERTIR */}
            <Button onPress={convertir}>
                <ButtonText>Convertir</ButtonText>
            </Button>

            {/* LIMPIAR */}
            <Button onPress={limpiar}>
                <ButtonText>Limpiar</ButtonText>
            </Button>

            {/* MENSAJE */}
            {mensaje !== "" && (
                <Result>
                    {mensaje}
                </Result>
            )}

            {/* RESULTADO */}
            {resultado !== null && (
                <Result>
                    {monto} {monedaOrigen} = {resultado.toFixed(2)} {monedaDestino}
                </Result>
            )}

            {/* VOLVER */}
            <Button onPress={() => navigation.goBack()}>
                <ButtonText>Volver</ButtonText>
            </Button>
        </Container>
    );
}

// =========================
// ESTILOS DEL PICKER
// =========================

const styles = StyleSheet.create({
    picker: {
        width: "100%",
        height: 55,
    },
});
