import React from "react";
import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import avatar from "../../images/avatar.png";
import {
  Container,
  Header,
  HeaderSubtitle,
  Title,
  Todo,
  TextTodo,
  My,
  TextMy,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from "./styles";

const Activities = () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
        <HeaderSubtitle>
          <Todo>
            <TextTodo>Todas</TextTodo>
          </Todo>
          <My>
            <TextMy>Minhas</TextMy>
          </My>
        </HeaderSubtitle>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@PatrickPerosa</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Patrick Perosa</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$18,00</Value>
            <Divider />

            <Feather name="lock" color="#fff" size={14} />
            <Date>Há 2 meses</Date>
          </Details>
          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                color="#fff"
                size={14}
              />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <AntDesign name="hearto" color="#fff" size={14} />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Activities;
