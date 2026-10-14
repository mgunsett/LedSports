import React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Text,
  Box,
  Flex,
  useDisclosure,
  useBreakpointValue
} from '@chakra-ui/react';
import { FaTrophy } from 'react-icons/fa';

const ClubInfo = ({ clubData, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const triggerMode = useBreakpointValue({ base: 'click', md: 'hover' });

  // Si no hay datos del club, solo renderizamos el children (el escudo) sin popover
  if (!clubData) {
    return children;
  }

  const { name, years, trophies, datoInfo } = clubData;

return (
    <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        trigger={triggerMode}
        placement="top"
        openDelay={0}
        closeDelay={100}
    >
        <PopoverTrigger>
            <Box display="inline-block" >
                    {children}
            </Box>
        </PopoverTrigger>
        <PopoverContent 
            bgGradient="linear(to-b, black, gray.900)"
            borderColor="whiteAlpha.300" 
            color="white" 
            width={{ base: "190px", md: "230px" }}
            _focus={{ outline: 'none' }}
        >
            <PopoverArrow  bg="gray.900" borderColor="whiteAlpha.300" />
            <PopoverHeader borderBottomColor="whiteAlpha.200" fontWeight={'bold'} color="orange.400" fontSize={{base: 'xs', md: 'sm'}}>
                {name || "Club"}
            </PopoverHeader> 
            <PopoverCloseButton  
                color="whiteAlpha.600" 
                fontSize={{ base: "8px", md: "10px" }}  
                _hover={{   color: "red.400" }}
            />
            <PopoverBody>
                <Flex direction="column" gap={4}>
                    {datoInfo && (
                        <Text fontSize={{ base: "10px", md: "xs" }}>
                            &nbsp;{datoInfo}
                        </Text>
                    )}
                    {years && (
                        <Text fontSize={{ base: "10px", md: "xs" }}>
                            <Text as="span" color="whiteAlpha.700">Periodo: </Text>
                            &nbsp;{years}
                        </Text>
                    )}
                    {trophies && trophies.length > 0 && (
                        <Box>
                            <Flex wrap="wrap" gap={2}>
                                {trophies.map((trophy, index) => (
                                    <Flex key={index} align="center" justifyContent={'space-between'}  bg="whiteAlpha.100" px={2} py={1} borderRadius="md" w="100%">
                                        <Box as={FaTrophy} color="yellow.400" size="12px" />
                                        <Text fontSize={{ base: "10px", md: "xs" }}>{trophy.name}</Text>
                                    </Flex>
                                ))}
                            </Flex>
                        </Box>
                    )}
                </Flex>
            </PopoverBody>
        </PopoverContent>
    </Popover>
);
};

export default ClubInfo;
