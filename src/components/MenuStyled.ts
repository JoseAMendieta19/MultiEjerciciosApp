import styled from "styled-components/native";

export const MenuContainer = styled.ScrollView`
  flex: 1;
  background-color: #f5f5f5;
`;

export const MenuTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 15px;
  color: #000;
`;

export const MenuContent = styled.View`
  align-items: center;
  padding: 0px 20px 20px 20px;
`;

export const Card = styled.TouchableOpacity`
  width: 90%;
  height: 75px;
  background-color: #087ff5;
  border-radius: 16px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 12px;
  padding: 15px;
`;

export const CardText = styled.Text`
  color: white;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  padding-left: 20px;
`;

export const CardIcon = styled.Text`
  font-size: 25px;
`;