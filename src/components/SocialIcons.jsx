import React from "react";
import { socialMediaLinks } from "../utils/constants";
import { Flex, Card, CardBody, Heading, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { AiOutlineDownload } from "react-icons/ai";

const SocialIcons = () => {
  const viewResumeLink = "https://drive.google.com/file/d/1O-T6LZtEOTX5E9RAu5Fm7GFntEsx_emj/view";

  return (
    <Flex
      margin="1.5rem 0"
      display="flex"
      alignItems="center"
      justifyContent={["center","left","left"]}
    >
      {socialMediaLinks.map((linkData, index) => (
        <Link
          key={index}
          href={linkData.href}
          target="_blank"
          rel="noopener noreferrer"
          _hover={{
            textDecoration: "none",
            backgroundColor: linkData.hoverColor,
          }}
          backgroundColor={linkData.backgroundColor}
          display="flex"
          alignItems="center"
          justifyContent="center"
          my={3}
          mr={3}
          fontSize={["1.5rem", "2rem", "2rem"]}
          padding="10px"
          borderRadius="1rem"
        >
          <Icon as={linkData.icon} />
        </Link>
      ))}
            <a href={viewResumeLink} target="_blank">
              <Card
                borderRadius="1rem"
                backgroundColor="blueTheme.card"
                transition="all .2s ease-in-out"
                _hover={{
                  cursor: "pointer",
                  backgroundColor: "blueTheme.cardHover",
                  //transform: "scale(1.05)",
                }}
              >
                <CardBody display="flow" alignItems="center" textAlign="center">
                  
                  <Heading my={-0.5} textAlign="center"  fontSize="0.9rem" className="text-button-resume">
                    Résumé
                  </Heading>
                </CardBody>
              </Card>
            </a>
    </Flex>
  );
};

export default SocialIcons;
