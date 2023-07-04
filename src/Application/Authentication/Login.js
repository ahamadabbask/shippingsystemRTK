import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  GridItem,
  Grid,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useLoginMutation } from "../../Redux/CreateApi/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      await login(values);
      const response = await login(values);
      if (response.data) {
        if (response.data.data.login.type === "error") {
          toast({
            title: response?.data?.data?.login?.message,
            status: "error",
            position: "top",
            duration: 5000,
            isClosable: true,
          });
        }
        if (response.data.data.login.type === "success") {
          navigate("/shipping/dashboard");
          toast({
            title: response?.data?.data?.login?.message,
            status: "success",
            position: "top",
            duration: 5000,
            isClosable: true,
          });
        }
      }
      if (response.error) {
        toast({
          title: response?.error?.data?.errors[0].message,
          status: "success",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
      }
    },
  });

  return (
    <Grid
      templateAreas={`"header"
                "main"
                "footer"`}
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem bg="#29ABCA" pt={2} h="70px" px={20} area={"header"}>
        <Flex>
          <img
            height="50"
            width="60"
            src="https://img.icons8.com/stickers/400/successful-delivery.png"
            alt="icons"
          />
          <Text mx={2} mt={2} fontSize={"3xl"}>
            <b>
              <i>S</i>
            </b>
            <small>
              hip<i>p</i>ing
            </small>{" "}
            <b>
              <i>S</i>
            </b>
            <small>
              ys<i>t</i>em
            </small>
          </Text>
        </Flex>
      </GridItem>
      <GridItem bg="#cecece" area={"main"}>
        <Flex>
          <Box w={"49vw"}>
            <img src="/fron-img/front-img.jpg" alt="fron" />
          </Box>
          <Box w={"49vw"}>
            <Flex align={"center"} justify={"center"}>
              <form onSubmit={formik.handleSubmit}>
                <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                  <Stack align={"center"}>
                    <Heading fontSize={"4xl"}>Sign in to your account</Heading>
                    <Text fontSize={"lg"} color={"gray.600"}>
                      to enjoy all of our cool{" "}
                      <Link color={"blue.400"}>features</Link> ✌️
                    </Text>
                  </Stack>
                  <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                  >
                    <Stack spacing={4}>
                      <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input
                          type="email"
                          name="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          required
                        />
                      </FormControl>
                      <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input
                          name="password"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          type="password"
                          required
                        />
                      </FormControl>
                      <Stack spacing={10}>
                        <Stack
                          direction={{ base: "column", sm: "row" }}
                          align={"start"}
                          justify={"space-between"}
                        >
                          <Checkbox>Remember me</Checkbox>
                          <Link color={"blue.400"}>Forgot password?</Link>
                        </Stack>
                        <Button
                          type="submit"
                          bg={"blue.400"}
                          color={"white"}
                          _hover={{
                            bg: "blue.500",
                          }}
                        >
                          Sign in
                        </Button>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </form>
            </Flex>
          </Box>
        </Flex>
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}
