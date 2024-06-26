import { Flex, HStack, chakra } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import React from "react";
import MobileHeader from "./MobileHeader";
import { links } from "../utils/constants";
import { usePathname } from "next/navigation";
//import { Link } from "react-scroll";

export default function Header() {
  const pathname = usePathname();

  return (
    <chakra.header
      id="header"
      backgroundColor="blueTheme.navBg"
      pos="sticky"
      top={0}
      zIndex="100"
      boxShadow="0 10px 30px -10px blueTheme.navShadow"
      
    >
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        <Link
          href="/"
          fontFamily="Righteous"
          fontSize="lg"
          _hover={{ textDecoration: "none", color:"blueTheme.navLinkActive",transition:"all .5s ease-in-out" }}
        >
          SUBAIG BINDRA  {"</>"} {" "}
        </Link>

        <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }} marginRight="6rem">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              fontWeight="normal"
              _hover={{ textDecoration: "none", color: "blueTheme.navLinkActive" }}
              fontSize="lg"
              className={pathname === link.path ? "active-link" : ""}
            >
              {link.text}
            </Link>
          ))}
        </HStack>
        <HStack>
          <MobileHeader {...{ pathname }} />
        </HStack>
      </Flex>
    </chakra.header>
  );
}
