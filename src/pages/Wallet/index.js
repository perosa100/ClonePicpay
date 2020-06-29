import React, { useState } from "react";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionsLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardDetails,
  CardInfo,
  CardTitle,
  Img,
  CardBody,
  AddButton,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel,
} from "./styles";
import { Switch } from "react-native";
import creditCard from "../../images/credit-card.png";
const Wallet = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToogleVisibily() {
    setIsVisible((prevState) => !prevState);
  }

  function handleToogleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }
  return (
    <Wrapper>
      <Header
        colors={useBalance ? ["#52e78c", "#1ab563"] : ["#d3d3d3", "#868686"]}
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? "0,00" : " ----"}</Bold>
            </Value>
            <EyeButton onPress={handleToogleVisibily}>
              <Feather
                name={isVisible ? "eye" : "eye-off"}
                size={28}
                color="#fff"
              />
            </EyeButton>
          </BalanceContainer>
          <Info>Seu Saldo esta redendo 100% do CDI</Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={28} color="#fff" />
              <ActionsLabel>Adicionar</ActionsLabel>
            </Action>

            <Action>
              <FontAwesome name="bank" size={20} color="#fff" />
              <ActionsLabel>Retirar</ActionsLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>
      <UseBalance>
        <UseBalanceTitle>Usar Saldo ao pagar</UseBalanceTitle>
        <Switch value={useBalance} onValueChange={handleToogleUseBalance} />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>Formas de pagamento</PaymentMethodsTitle>
        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre seu cartão de crédito</CardTitle>
              <CardInfo>
                Cadastre seu cartão de crédito para poder fazer pagamentos mesmo
                quando não tiver saldo no seu PicPay
              </CardInfo>
            </CardDetails>
            <Img source={creditCard} resizeMode="contain" />
          </CardBody>
          <AddButton>
            <AntDesign name="pluscircleo" size={30} color="#0db060" />
            <AddLabel>Adicionar cartão de crédito</AddLabel>
          </AddButton>
        </Card>

        <UseTicketContainer>
          <UseTicketButton>
            <MaterialCommunityIcons
              name="ticket-outline"
              size={20}
              color="#0db060"
            />
            <UseTicketLabel>Usar Código promocional</UseTicketLabel>
          </UseTicketButton>
        </UseTicketContainer>
      </PaymentMethods>
    </Wrapper>
  );
};

export default Wallet;
