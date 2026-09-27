import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import {
    Container,
    Title,
    Input,
    Button,
    ButtonText,
    Result
    } from "../components/Styled";

    type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, "SignoNumero">;
    };

export default function SignoNumeroScreen({ navigation }: Props) {
    const [numero, setNumero] = useState("");
    const [resultado, setResultado] = useState<string | null>(null);

    const verificar = () => {
    const n = Number(numero);
        if (n > 0) setResultado("El número es Positivo");
        else if (n < 0) setResultado("El número es Negativo");
        else setResultado("El número es Cero");
    };

    return (
    <Container>
        <Title>Positivo o Negativo</Title>

        <Input
            keyboardType="numeric"
            value={numero}
            onChangeText={setNumero}
            placeholder="Ingrese un número"
        />

        <Button onPress={verificar}>
            <ButtonText>Verificar</ButtonText>
        </Button>

        {resultado !== null && <Result>{resultado}</Result>}

        <Button onPress={() => navigation.goBack()}>
            <ButtonText>Volver</ButtonText>
        </Button>
        </Container>
    );
}