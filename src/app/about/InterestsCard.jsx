"use client"
import React from "react";
import { Card, Heading, Icon } from "@chakra-ui/react";

const InterestsCard = ({ interest, icon }) => {
  
  return (
    <Card
      display="grid"
      gridTemplateColumns="30% 70%"
      alignItems="center"
      width={["80vw","80vw","18rem"]}
      height="5rem"
      borderRadius="0.5rem"
      backgroundColor="blueTheme.card"
      fontSize="2.5rem"
      padding="16px"
      //cursor="pointer"
      transition="background-color .3s ease-in-out"
      boxShadow="0 10px 30px -15px blueTheme.navShadow"
      _hover={{
        backgroundColor: "blueTheme.cardHover", transform:"scale(1.05)"
      }}
    >
      <Icon as={icon} />
      <Heading size="md">{interest}</Heading>
    </Card>
  );
};

export default InterestsCard;