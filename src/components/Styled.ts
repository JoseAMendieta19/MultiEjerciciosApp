import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    padding: 20px;
`;

export const Title = styled.Text`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
`;

export const Input = styled.TextInput`
    width: 250px;
    border-width: 1px;
    border-color: #ccc;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: white;
`;

export const Button = styled.TouchableOpacity`
    width: 220px;
    background-color: #007bff;
    padding: 14px;
    border-radius: 10px;
    margin: 5px;
`;

export const ButtonText = styled.Text`
    color: white;
    text-align: center;
    font-size: 18px;
`;

export const Result = styled.Text`
    font-size: 22px;
    margin-top: 20px;
    text-align: center;
    font-weight: 600;
`;

export const Label = styled.Text`
    font-size: 16px;
    color: #555;
    margin-top: 8px;
`;