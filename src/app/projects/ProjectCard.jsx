"use client";
import ProjectModal from "./ProjectModal";
import React, { useState } from "react";
import { Card, ScaleFade, Image, Text, Link, Icon,Flex, Center } from "@chakra-ui/react";
import { FaLink,FaGithub } from "react-icons/fa6";
import { BsInfoCircleFill } from "react-icons/bs";

const ProjectCard = (props) => {
  const { title, image, link, source, type } = props.data;
  const [showHover, setShowHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const linkHover = {fill:"blueTheme.navLinkActive",transition:"all ease-in-out 0.5s"}

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <Center>
      <ScaleFade initialScale={1.2} in={true} reverse={true}>
        <Text
          style={{
            fontSize: "1.5rem",
            marginTop: "1rem",
            marginBottom: "5px",
            textAlign: "center",
            fontFamily:"Righteous"
          }}
        >
          {title}
        </Text>
        <Card
            maxW={{ base: "90%", md: "100%", lg: "100%" }}
            margin="auto"
            onMouseEnter={() => setShowHover(true)}
            onMouseLeave={() => setShowHover(false)}
            zIndex={0}
            boxShadow="0 10px 30px -10px black"
          >
            <Image
              objectFit="cover"
              src={`images/${image}.png`}
              alt="project-img"
              height="15rem"
              borderRadius="0.5rem"
            />
            <Flex
            
            height="100%" //"13rem"
            backgroundColor="hover.gray"
            position="absolute"
            zIndex={showHover ? 1 : 0}
            opacity={showHover ? 1 : 0}
            width="100%"
            transition="all ease-in-out 0.3s"
            alignItems="center"
            justifyContent="center"
            fontSize="2.5rem"
          >
            <Link mr={3} onClick={openModal}>
              <Icon as={BsInfoCircleFill} _hover={linkHover} />
            </Link>
            {
              link !==null ?
              <Link href={link} target="_blank" mr={3}><Icon as={FaLink} _hover={linkHover}/></Link>
              :
              null
            }
            {source && (<Link href={source} target="_blank" mr={1}><Icon as={FaGithub} _hover={linkHover}/></Link>)}
          </Flex>
          </Card>
      </ScaleFade>

      <ProjectModal
       isOpen={isModalOpen}
       onClose={closeModal}
       projectData={props.data}
      />
      </Center>
    </>
  );
};

export default ProjectCard;
