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
    navigation: NativeStackNavigationProp<RootStackParamList, "IMC">;
};

export default function IMCScreen({ navigation }: Props) {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [imc, setImc] = useState<number | null>(null);
    const [categoria, setCategoria] = useState("");
    const [mensaje, setMensaje] = useState("");

    const calcular = () => {
        const p = Number(peso);
        const a = Number(altura);

        if (!peso && !altura) {
            setMensaje("Ingrese todos los campos.");
            setImc(null);
            setCategoria("");
            return;
        }

        if (!peso) {
            setMensaje("Ingrese el peso.");
            setImc(null);
            setCategoria("");
            return;
        }

        if (!altura) {
            setMensaje("Ingrese la altura.");
            setImc(null);
            setCategoria("");
            return;
        }

        if (Number.isNaN(p) || Number.isNaN(a) || p <= 0 || a <= 0) {
            setMensaje("Ingrese valores válidos mayores que 0.");
            setImc(null);
            setCategoria("");
            return;
        }

        const resultado = p / (a * a);

        setImc(resultado);
        setMensaje("");

        if (resultado < 18.5) {
            setCategoria("Bajo peso");
        } else if (resultado < 25) {
            setCategoria("Peso normal");
        } else if (resultado < 30) {
            setCategoria("Sobrepeso");
        } else {
            setCategoria("Obesidad");
        }
    };

    const limpiar = () => {
        setPeso("");
        setAltura("");
        setImc(null);
        setCategoria("");
        setMensaje("");
    };

    return (
        <Container>
            <Title>Índice de Masa Corporal</Title>

            <Label>Peso (kg)</Label>
            <Input
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
                placeholder="Ej: 70"
                maxLength={6}
            />

            <Label>Altura (metros)</Label>
            <Input
                keyboardType="decimal-pad"
                value={altura}
                onChangeText={setAltura}
                placeholder="Ej: 1.75"
                maxLength={5}
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

            {imc !== null && (
                <Result>
                    IMC: {imc.toFixed(2)} {"\n"}({categoria})
                </Result>
            )}

            <Button onPress={() => navigation.goBack()}>
                <ButtonText>Volver</ButtonText>
            </Button>
        </Container>
    );
}