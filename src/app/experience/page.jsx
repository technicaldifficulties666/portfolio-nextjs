"use client";
import React from "react";
import WorkCard from "./WorkCard";
import { Heading, SimpleGrid, Center, Box } from "@chakra-ui/react";
import { workData } from "../../utils/constants";
import { RevealWrapper } from "next-reveal";

const Work = () => {
  return (
    <>
      <Center m={5}>
        <Box width={["80vw", "80vw", "79vw"]} height="100%" marginBottom="1rem">
          <Heading className="sub-heading" size="md" my={3}>
            PROFESSIONAL EXPERIENCE
          </Heading>
          <RevealWrapper className="load-hidden" delay={300}>
            <SimpleGrid>
              {workData.map((data, index) => {
                return <WorkCard {...{ data }} key={index} />;
              })}
            </SimpleGrid>
          </RevealWrapper>
        </Box>
      </Center>
    </>
  );
};

export default Work;
