"use client";
import React from "react";
import Education from "./Education";

import {
  Heading,
  SimpleGrid,
  Image,
  Center,
  Box,
  Text,
} from "@chakra-ui/react";
import InterestsCard from "./InterestsCard";
import { interestsData, education } from "../../utils/constants";
import { RevealWrapper } from "next-reveal";

const Page = () => {
  return (
    <>
      <Center m={5}>
        <Box width="80vw" height="100%" marginBottom="2rem">
          <RevealWrapper className="load-hidden" id="about" delay={300}>
            <Heading className="sub-heading" size="md" my={3}>
              BIO
            </Heading>
            <SimpleGrid
              columns={[1, null, 2]}
              gap={6}
              fontSize="1.1rem"
              marginBottom="3rem"
              templateColumns={[null, null, "30% 70%"]}
            >
              <Image
                objectFit="cover"
                src="/images/profile0.jpeg"
                alt="profile-image"
                width={["20rem", "30rem", "20rem"]}
                height={["20rem", "30rem", "23rem"]}
                //marginBottom={["1rem", "1rem", null]}
              />

              <Box textAlign="justify">
                <Heading size="xl" mb={3}>
                  👋 Hey there
                </Heading>
                <br />
                <Text marginRight="1.5rem">
                  I&apos;m <span className="name">Subaig</span>, a 
                  {" "}
                  <span className="tech">full-stack developer</span> with 3+ years 
                  of experience. I&apos;m passionate about solving real-world problems and 
                  building scalable apps with seamless user experiences. 
                  Getting my hands dirty and creating something that brings value to 
                  people out there is the most rewarding aspect of my work. I&apos;m 
                  proficient in time management, collaborating with cross-functional 
                  teams, presentation and project management. I utilize best coding 
                  practices to write well-tested & maintainable code, and I&apos;m
                  always learning new tools & techniques to stay at the forefront 
                  of the ever-evolving tech landscape. 
                </Text>
                <br />
                <Text marginRight="1.5rem">
                  📫 Open to collaborations and exciting projects, I&apos;m
                  eager to connect with fellow developers and tech enthusiasts.
                  Let&apos;s build something amazing together!
                </Text>
                <Text>
                  Happy coding! 🖥️
                  <br />
                </Text>
              </Box>
            </SimpleGrid>
          </RevealWrapper>

          <RevealWrapper className="load-hidden" delay={600}>
          <Heading className="sub-heading" size="md" my={3} >
          EDUCATION
          </Heading>
            <SimpleGrid>
              {education.map((data, index) => {
                return <Education {...{ data }} key={index} />;
              })}
            </SimpleGrid>
          </RevealWrapper>

          <RevealWrapper className="load-hidden" id="interests" delay={600}>
            <Heading style={{ paddingTop: "2rem" }} className="sub-heading" size="md" my={3}>
              INTERESTS
            </Heading>
            <SimpleGrid
              spacing={5}
              templateColumns="repeat(auto-fill, minmax(270px, 1fr))"
            >
              {interestsData.map((data, index) => {
                return (
                  <InterestsCard
                    interest={data.interest}
                    icon={data.icon}
                    key={index}
                  />
                );
              })}
            </SimpleGrid>
          </RevealWrapper>
        </Box>
      </Center>
    </>
  );
};

export default Page;
