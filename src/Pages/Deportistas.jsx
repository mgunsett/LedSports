import { Flex, Text } from "@chakra-ui/react";

export const Deportistas = () => {
    return (
        <Flex 
        bg="blackAlpha.900" 
        minHeight="100vh" 
        pt={20}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        >
            <Text fontSize="2xl" fontWeight="bold" color="white">Deportistas</Text>
        </Flex>
    );
};