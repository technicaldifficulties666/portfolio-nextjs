import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Image,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Link,
  Icon,
  Flex,
  Grid,
} from "@chakra-ui/react";
import { FaLink, FaGithub } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { useBreakpointValue } from "@chakra-ui/react";
//import './../../i18n';
//import { useTranslation } from 'react-i18next';

const ProjectModal = ({ isOpen, onClose, projectData }) => {
    const linkHover = {
        fill: "blueTheme.navLinkActive",
        transition: "all ease-in-out 0.5s",
      };
      //const [t, i18n ] = useTranslation();
      const modalSize = useBreakpointValue({ base: "", md: "xxl" });
      const fontSizeHeading = useBreakpointValue({base: "1.2rem", md: "2.5rem"});
      const fontSizeData = useBreakpointValue({base: "1rem", md: "1.5rem"})
      const fontSizeText = useBreakpointValue({base: "0.7rem", md: "1rem"});
      const flexDirection = useBreakpointValue({base: "column", md: ""});
      const modalTopMargin = useBreakpointValue({base: "-1rem", md: "0rem"});
      const linkFontSize = useBreakpointValue({base: "1.5rem", md: "3rem"});
      const linkPaddingTop = useBreakpointValue({base: "0.7rem", md: "3rem"});

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={modalSize} >
      <ModalOverlay />
      <ModalContent 
        margin="auto" 
        width={{ base: "80%", md: "70%" }} 
        maxWidth={{ base: "90%", md: "70%" }} 
        height={{base: "97%", md: "67%"}}
        >
        <ModalHeader fontFamily="Righteous" color={"yellow"} fontSize={fontSizeHeading} alignSelf="center">
        {projectData.title}
        </ModalHeader>
        <ModalCloseButton _focus={{ outline: "none", boxShadow: "none",}} />
        <ModalBody marginTop={modalTopMargin}>
          <Flex direction={flexDirection} align="center">
            <Image className="project-modale-image"
              objectFit="fill"
              src={`images/${projectData.image}.png`}
              alt="project-img"
              width="100%"//"30rem"
              height="22rem"//"22rem"
              padding={"1rem"}
              borderRadius="1.5rem"
              maxHeight = {{base: "18rem", md: "22rem"}}
              maxWidth={{ base: "100%", md: "30rem" }}
            />
            <Flex direction="column" marginTop="1rem" paddingLeft="1rem" paddingRight="1rem">
            <Text padding={"2.5px"} color="blueTheme.navLinkActive" fontSize={fontSizeData} >Description</Text>
            <Text padding={"2.5px"} fontSize={fontSizeText}>{projectData.description}</Text>
            <Text padding={"2.5px"} color="blueTheme.navLinkActive" fontSize={fontSizeData} >Made with </Text>
            <Text padding={"2.5px"} fontSize={fontSizeText}>{projectData.languages}</Text>
            <Flex direction="row" paddingTop={linkPaddingTop}  width="100%" alignItems="center" justifyContent="center" fontSize={linkFontSize} >
            {projectData.link !== null ? (
              <Link href={projectData.link} target="_blank" mr={3} >
               
                <Icon as={FaLink}  _hover={linkHover}/>
                
              </Link>
            ) : null}
            {projectData.source && (<Link href={projectData.source} target="_blank" mr={1} >
              <Icon as={FaGithub} _hover={linkHover} />
            </Link>)}
            </Flex>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;