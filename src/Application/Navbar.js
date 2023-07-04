import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Text,
  Image,
  Center,
  AvatarBadge,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box px={4}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Text ml={18} color="#edf6f9" fontSize="2xl">
          <Flex>
            <Image
              // boxSize="60px"
              width="70px"
              mx={2}
              objectFit="cover"
              src="https://img.icons8.com/external-itim2101-flat-itim2101/512/external-delivery-logistics-itim2101-flat-itim2101.png"
              alt="Dan Abramov"
            />
            <b style={{ marginTop: "14px" }}>Shipping system</b>
          </Flex>
        </Text>
        <Flex mr={5}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
            >
              <Avatar
                size={"md"}
                boxSize="2.20em"
                src={"https://bit.ly/ryan-florence"}
              >
                <AvatarBadge boxSize="1em" bg="green.500" />
              </Avatar>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to="/shipping/profile">
                  <Center>
                    <Avatar size={"sm"} src={"https://bit.ly/ryan-florence"} />
                    <Text mx={1}>Profile</Text>
                  </Center>
                </Link>
              </MenuItem>
              <MenuItem>
                <Center>
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/fluency/48/settings.png"
                    alt="settings"
                  />
                  <Text mx={1}>Setting</Text>
                </Center>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <Button width="100%">
                  Logout
                  <img
                    width="25"
                    height="25"
                    src="https://img.icons8.com/external-tal-revivo-duo-tal-revivo/25/external-web-secure-session-sign-out-internet-logoff-login-duo-tal-revivo.png"
                    alt="external-web-secure-session-sign-out-internet-logoff-login-duo-tal-revivo"
                  />
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}
