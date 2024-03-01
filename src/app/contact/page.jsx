"use client";
import React,{useEffect} from "react";
import ContactForm from "./ContactForm";
import { Heading, Icon, Stack, Tooltip,useDisclosure,Center,SimpleGrid, Box } from "@chakra-ui/react";
import { IoIosMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { Link } from "@chakra-ui/next-js";
import SocialIcons from "../../components/SocialIcons";
import { RevealWrapper } from 'next-reveal'


const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <Center m={5}>
      <SimpleGrid my={["5rem","2rem"]}  templateColumns={[null,null,"40% 55%"]}>
        <RevealWrapper className="load-hidden" delay={300}>
            <Heading fontSize="2.5rem" margin="5px">
              Let&apos;s talk about something{" "}
              <Box color="social.instagram" display="inline">
                cool
              </Box>{" "}
            </Heading>

            <Stack marginTop="4rem">
              <Tooltip label="Send Mail">
                <Link
                  href="mailto:subaig24bindra@gmail.com"
                  target="_blank"
                  className="contact-text-span"
                  my={3}
                  _hover={{ textDecoration: "none" }}
                >
                  <Icon as={IoIosMail} mx={2} />
                  <Box fontSize="1.2rem">subaig24bindra@gmail.com</Box>
                </Link>
              </Tooltip>

              <Tooltip label="Location">
                  <Box className="contact-text-span" my={3}>
                    <Icon as={ImLocation} mx={2} />
                    <Box fontSize="1.2rem">Vancouver, Canada</Box>
                  </Box>
              </Tooltip>
            </Stack>
            <SocialIcons />
          
        </RevealWrapper>
        <ContactForm />
      </SimpleGrid>

    </Center>
  );
};

export default Contact;
