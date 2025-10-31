import { Flex, Text } from "@chakra-ui/react";

export const Agentes = () => {
    return (
        <Flex 
        bg="blackAlpha.900" 
        minHeight="100vh" 
        pt={20}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        >
            <Text fontSize="2xl" fontWeight="bold" color="white">Agentes</Text>
        </Flex>
    );
};