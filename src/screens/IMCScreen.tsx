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

    const calcular = () => {
    const p = Number(peso);
    const a = Number(altura);
    const resultado = p / (a * a);
    setImc(resultado);

    if (resultado < 18.5) setCategoria("Bajo peso");
    else if (resultado < 25) setCategoria("Peso normal");
    else if (resultado < 30) setCategoria("Sobrepeso");
    else setCategoria("Obesidad");
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
        />

        <Label>Altura (metros)</Label>
        <Input
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
        placeholder="Ej: 1.75"
        />

        <Button onPress={calcular}>
        <ButtonText>Calcular</ButtonText>
        </Button>

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