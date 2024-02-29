"use client";
import React from "react";
import {
    Center,
    Box,
    Button
  } from "@chakra-ui/react";
  import { AiOutlineDownload } from "react-icons/ai";

const Resume = () => {

  return (
    <>
      <Center>
        <Box width={["90vw", "90vw", "80vw"]} height="100%" marginTop="2rem" marginBottom="4rem">
        <Button as="a" href="/files/SubaigBindra_FullStackDev_Resume.pdf" colorScheme="teal" size="sm" download="SubaigBindra_FullStackDev_Resume">
              Download&nbsp;
              <AiOutlineDownload fill="black"/>
        </Button>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingTop: "141.4286%",
              paddingBottom: 0,
              //boxShadow: "0 2px 8px 0 rgba(63, 69, 81, 0.16)",
              //marginTop: "1em",
              border:"none",
              marginBottom: "0.9em",
              overflow: "hidden",
              //borderRadius: "8px",
              willChange: "transform",
            }}
          >
            <iframe
              title="Resume"
              loading="lazy"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                border: "none",
                padding: 0,
                margin: 0,
              }}
              src="https://www.canva.com/design/DAF6Lwu7A_w/29XKo6pgp4d1jb6DATYllw/view?embed"
              allowFullScreen
            ></iframe>
          </div>
        </Box>
      </Center>
    </>
  );
};

export default Resume;