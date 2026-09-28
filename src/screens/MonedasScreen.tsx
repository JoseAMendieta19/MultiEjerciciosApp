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
    navigation: NativeStackNavigationProp<RootStackParamList, "Monedas">;
};

// Tasas de cambio de ejemplo (respecto a 1 USD)
const tasas: { nombre: string; codigo: string; valor: number }[] = [
    { nombre: "Euro", codigo: "EUR", valor: 0.92 },
    { nombre: "Libra Esterlina", codigo: "GBP", valor: 0.79 },
    { nombre: "Yen Japonés", codigo: "JPY", valor: 149.5 },
    { nombre: "Peso Colombiano", codigo: "COP", valor: 4050 },
    { nombre: "Sol Peruano", codigo: "PEN", valor: 3.75 },
];

export default function MonedasScreen({ navigation }: Props) {
    const [monto, setMonto] = useState("");
    const [monedaSeleccionada, setMonedaSeleccionada] = useState(tasas[0]);
    const [resultado, setResultado] = useState<number | null>(null);

    const convertir = () => {
        const m = Number(monto);
        setResultado(m * monedaSeleccionada.valor);
    };

    return (
    <Container>
        <Title>Conversor de Monedas</Title>

        <Label>Monto en USD ($)</Label>
        <Input
            keyboardType="numeric"
            value={monto}
            onChangeText={setMonto}
            placeholder="Ej: 100"
        />

        <Label>Selecciona la moneda destino:</Label>
        {tasas.map((t) => (
            <Button
            key={t.codigo}
            onPress={() => setMonedaSeleccionada(t)}
            style={{
                backgroundColor: monedaSeleccionada.codigo === t.codigo ? "#ee8dae" : "#9b6a7a"
            }}
            >
            <ButtonText>{t.nombre} ({t.codigo})</ButtonText>
        </Button>
        ))}

        <Button onPress={convertir}>
            <ButtonText>Convertir</ButtonText>
        </Button>

        {resultado !== null && (
            <Result>
            {monto} USD = {resultado.toFixed(2)} {monedaSeleccionada.codigo}
            </Result>
        )}

        <Button onPress={() => navigation.goBack()}>
            <ButtonText>Volver</ButtonText>
        </Button>
        </Container>
    );
}