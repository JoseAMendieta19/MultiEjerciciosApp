import styled from "styled-components/native";

export const MenuContainer = styled.ScrollView`
  flex: 1;
  background-color: #fff5f7;
`;

export const MenuTitle = styled.Text`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
  color: #6d5a6e;
`;

export const MenuContent = styled.View`
  align-items: center;
  padding: 0px 20px 25px 20px;
`;

export const Card = styled.TouchableOpacity`
  width: 90%;
  height: 75px;
  background-color: #d9a7b8;
  border-radius: 18px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 14px;
  padding: 15px;
`;

export const CardText = styled.Text`
  color: #ffffff;
  text-align: left;
  font-size: 17px;
  font-weight: 600;
  padding-left: 10px;
`;

export const CardIcon = styled.Text`
  font-size: 25px;
  margin-bottom: 4px;
`;