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
} from "@chakra-ui/react";
import { FaLink, FaGithub } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
//import './../../i18n';
//import { useTranslation } from 'react-i18next';

const ProjectModal = ({ isOpen, onClose, projectData }) => {
    const linkHover = {
        fill: "blueTheme.navLinkActive",
        transition: "all ease-in-out 0.5s",
      };
      //const [t, i18n ] = useTranslation();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xxl">
      <ModalOverlay />
      <ModalContent margin="auto"  width="70%" height="67%">
        <ModalHeader fontFamily="Righteous" color={"yellow"} fontSize="2.8rem" alignSelf="center">
        {projectData.title}
        </ModalHeader>
        <ModalCloseButton _focus={{ outline: "none", boxShadow: "none",}} />
        <ModalBody>
          <Flex align="center">
            <Image className="project-modale-image"
              objectFit="fill"
              src={`images/${projectData.image}.png`}
              alt="project-img"
              width="30rem"
              height="22rem"
              padding={"1rem"}
            />
            <Flex direction="column" marginTop="1rem">
            <Text padding={"2.5px"} color="blueTheme.navLinkActive" fontSize="1.5rem" >Description</Text>
            <Text padding={"2.5px"}>{projectData.description}</Text>
            <Text padding={"2.5px"} color="blueTheme.navLinkActive" fontSize="1.5rem" >Technology Stack</Text>
            <Text padding={"2.5px"}>{projectData.languages}</Text>
            <Flex direction="row" paddingTop="3rem"  width="100%" alignItems="center" justifyContent="center" fontSize="3rem" >
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