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
    navigation: NativeStackNavigationProp<RootStackParamList, "SignoNumero">;
};

export default function SignoNumeroScreen({ navigation }: Props) {
    const [numero, setNumero] = useState("");
    const [resultado, setResultado] = useState<string | null>(null);
    const [mensaje, setMensaje] = useState("");

    const verificar = () => {
        // Campo vacío
        if (!numero.trim()) {
            setMensaje("Ingrese un número.");
            setResultado(null);
            return;
        }

        const n = Number(numero);

        // Validar número
        if (Number.isNaN(n)) {
            setMensaje("Ingrese un número válido.");
            setResultado(null);
            return;
        }

        // Determinar signo
        if (n > 0) {
            setResultado("El número es Positivo");
        } else if (n < 0) {
            setResultado("El número es Negativo");
        } else {
            setResultado("El número es Cero");
        }

        setMensaje("");
    };

    const limpiar = () => {
        setNumero("");
        setResultado(null);
        setMensaje("");
    };

    return (
        <Container>
            <Title>Positivo o Negativo</Title>

            <Label>Número</Label>

            <Input
                keyboardType="numeric"
                value={numero}
                onChangeText={(texto) => {
                    setNumero(texto);
                    setResultado(null);
                    setMensaje("");
                }}
                placeholder="Ingrese un número"
                maxLength={10}
            />

            <Button onPress={verificar}>
                <ButtonText>Verificar</ButtonText>
            </Button>

            <Button onPress={limpiar}>
                <ButtonText>Limpiar</ButtonText>
            </Button>

            {mensaje !== "" && (
                <Result>
                    {mensaje}
                </Result>
            )}

            {resultado !== null && (
                <Result>
                    {resultado}
                </Result>
            )}

            <Button onPress={() => navigation.goBack()}>
                <ButtonText>Volver</ButtonText>
            </Button>
        </Container>
    );
}

