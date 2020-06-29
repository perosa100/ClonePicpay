import React from "react";

import { Container, Details, Title, Description, Img } from "./styles";
import img13 from "../../images/13.png";
const Banner = () => {
  return (
    <Container>
      <Details>
        <Title>Cobre um Amigo</Title>
        <Description>
          Mantenha suas parcerias em dia, use o Picpay para fazer suas cobranças
        </Description>
      </Details>
      <Img source={img13} />
    </Container>
  );
};
export default Banner;
