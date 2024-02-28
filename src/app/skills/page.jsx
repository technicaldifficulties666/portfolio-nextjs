"use client";
import React,{useEffect} from "react";
import {
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Box,
  Center,
} from "@chakra-ui/react";
import { skillsData } from "../../utils/constants";
import { RevealWrapper } from "next-reveal";
import { skillsDevelopment,skillsDatabase,skillsTools } from "../../utils/constants";

const Skills = () => {

  return (
    <Center height="70vh" >
      <Box width="80vw" height="100%" >
        <Heading className="sub-heading" size="md" my={3}>
          TECHNICAL SKILLS
        </Heading>

        <RevealWrapper className="load-hidden" delay={300}>
        <Heading  color="blueTheme.navLinkActive" size="m" my={3}>
        DEVELOPMENT
        </Heading>
        <SimpleGrid
          //marginTop="4rem"
          spacing={5}
          templateColumns="repeat(auto-fill, minmax(135px, 1fr))"
          paddingTop="1rem"
          paddingBottom="1rem"
        >
          {skillsDevelopment.map((data, index) => {
            return (
              <Card
                key={index}
                backgroundColor="blueTheme.card"
                transition="all .2s ease-in-out"
                _hover={{
                  cursor: "pointer",
                  backgroundColor: "blueTheme.cardHover",
                  transform:"scale(1.05)"
                }}
              >
                <CardBody display="flow" alignItems="center" textAlign="center">
                  <Icon as={data.icon} width="55px" height="55px" />
                  <Heading my={1} textAlign="center" fontSize= "1.2rem">
                    {data.name}
                  </Heading>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>

        <Heading color="blueTheme.navLinkActive" size="m" my={3}>
        DATABASE MANAGEMENT
        </Heading>
        <SimpleGrid
          spacing={5}
          templateColumns="repeat(auto-fill, minmax(145px, 1fr))"
          paddingBottom="1rem"
          paddingTop="1rem"

        >
          {skillsDatabase.map((data, index) => {
            return (
              <Card
                key={index}
                backgroundColor="blueTheme.card"
                transition="all .2s ease-in-out"
                _hover={{
                cursor: "pointer",
                backgroundColor: "blueTheme.cardHover",
                transform:"scale(1.05)"
                }}
              >
                <CardBody display="flow" alignItems="center" textAlign="center" >
                  <Icon as={data.icon} width="55px" height="55px" />
                  <Heading my={1} textAlign="center" fontSize= "1.2rem">
                    {data.name}
                  </Heading>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>
        <Heading color="blueTheme.navLinkActive" size="m" my={3}>
        TOOLS AND PRACTICES
        </Heading>
        <SimpleGrid
          spacing={5}
          templateColumns="repeat(auto-fill, minmax(140px, 1fr))"
          paddingBottom="2rem"
          paddingTop="1rem"
        >
          {skillsTools.map((data, index) => {
            return (
              <Card
                key={index}
                backgroundColor="blueTheme.card"
                transition="all .2s ease-in-out"
                _hover={{
                cursor: "pointer",
                backgroundColor: "blueTheme.cardHover",
                transform:"scale(1.05)"
                }}
              >
                <CardBody display="flow" alignItems="center" textAlign="center" >
                  <Icon as={data.icon} width="55px" height="55px" />
                  <Heading my={1} textAlign="center" fontSize= "1.2rem">
                    {data.name}
                  </Heading>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>

        </RevealWrapper>
      </Box>
    </Center>
  );
};

export default Skills;
