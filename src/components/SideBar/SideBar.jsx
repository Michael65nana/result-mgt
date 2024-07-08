import { Box, Button, Flex, Link, VStack } from "@chakra-ui/react"
import { AiFillHome } from "react-icons/ai"
import { BiLogOut } from "react-icons/bi"
import { Link as RouterLink } from "react-router-dom"

const SideBar = () => {
    return(
        <Box
          height={"100vh"}
          borderRight={"2px solid"}
          borderColor={"black"}
          py={8}
          position={'sticky'}
          top={0}
          left={0}    
          px={{base: 2, md: 4}}
        >
            <Flex direction={'column'} gap={10} w={'full'} height={'full'} >
                <Link as={RouterLink} pl={2} display={{base: "none", md: "block"}} fontSize={'x-large'} fontWeight={'bold'} cursor={"pointer"} >
                    UNIDEL
                </Link>
                <Flex direction={'column'} gap={5} cursor={'pointer'}>
                    <Link
                      display={'flex'}
                      to={"/"}
				      as={RouterLink}
				      alignItems={"center"}
				      gap={4}
				      _hover={{ bg: "gray" }}
				      borderRadius={6}
				      p={2}
				      w={{ base: 10, md: "full" }}
				      justifyContent={{ base: "center", md: "flex-start" }}
                    >
				        <AiFillHome size={25} />
                        <Box>Home</Box>
                    </Link>
                    <Link
                      display={'flex'}
                      to={"/student"}
				      as={RouterLink}
				      alignItems={"center"}
				      gap={4}
				      _hover={{ bg: "gray" }}
				      borderRadius={6}
				      p={2}
				      w={{ base: 10, md: "full" }}
				      justifyContent={{ base: "center", md: "flex-start" }}
                    >
				        <AiFillHome size={25} />
                        <Box>Students</Box>
                    </Link>
                    {/* <Link
                      display={'flex'}
                      to={"/"}
				      as={RouterLink}
				      alignItems={"center"}
				      gap={4}
				      _hover={{ bg: "gray" }}
				      borderRadius={6}
				      p={2}
				      w={{ base: 10, md: "full" }}
				      justifyContent={{ base: "center", md: "flex-start" }}
                    >
				        <AiFillHome size={25} />
                        <Box>Home</Box>
                    </Link> */}
                    <Link
                      display={'flex'}
                      to={"/"}
				      as={RouterLink}
				      alignItems={"center"}
				      gap={4}
				      _hover={{ bg: "gray" }}
				      borderRadius={6}
				      p={2}
				      w={{ base: 10, md: "full" }}
				      justifyContent={{ base: "center", md: "flex-start" }}
                    >
				        <AiFillHome size={25} />
                        <Box>View Statistics</Box>
                    </Link>
                </Flex>
                <Flex
                    // onClick={}
                    alignItems={"center"}
                    gap={4}
                    _hover={{bg: "gray"}}
                    borderRadius={6}
                    p={2}
                    w={{base:10, md: "full"}}
                    mt={"auto"}
                    justifyContent={{base: "center", md: "flex-start"}}
                  >
                      <BiLogOut size={25}/>
                      <Button display={{base: "none", md: "block"}}
                       variant={'ghost'} _hover={{bg: 'transparent'}}
                    //    isLoading={isLoggingOut} 
                      >
                          Log Out
                      </Button>
                  </Flex>
            </Flex>
        </Box>
    )
}

export default SideBar