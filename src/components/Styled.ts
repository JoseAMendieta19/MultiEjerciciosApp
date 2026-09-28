import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #fff5f7;
    padding: 20px;
`;

export const Title = styled.Text`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 25px;
    text-align: center;
    color: #6d5a6e;
`;

export const Input = styled.TextInput`
    width: 280px;
    border-width: 1px;
    border-color: #e8cfd9;
    margin: 8px;
    padding: 12px 15px;
    border-radius: 15px;
    background-color: #ffffff;
    color: #5f5360;
`;

export const Button = styled.TouchableOpacity`
    width: 240px;
    background-color: #d9a7b8;
    padding: 14px;
    border-radius: 15px;
    margin: 6px;
`;

export const ButtonText = styled.Text`
    color: #ffffff;
    text-align: center;
    font-size: 17px;
    font-weight: 600;
`;

export const Result = styled.Text`
    font-size: 22px;
    margin-top: 20px;
    text-align: center;
    font-weight: 600;
    color: #6d5a6e;
`;

export const Label = styled.Text`
    font-size: 16px;
    color: #8a7585;
    margin-top: 8px;
    margin-bottom: 2px;
`;