import React from "react";
import { Flex, HStack, chakra, Box, Text, Link, Center } from "@chakra-ui/react";

export default function Footer() {
  /*return (
    <Center bg="blue.500" h="100px">
      <Box>
        <Text color="white">This is a footer component</Text>
        <Link href="https://example.com" color="white">
          Link to example.com
        </Link>
      </Box>
    </Center>
  );*/
  return (
    <footer style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      backgroundColor: "blueTheme.navBg",
      color: "white",
      padding: "2px 0",
      textAlign: "center",
      marginTop: "4rem",
    }}>
      <small >
        &copy; 2030 Ricardo. All rights reserved.
      </small>
      <p >
        <span >About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}