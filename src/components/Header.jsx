import { Card, CardHeader, CardBody, StackDivider, Box, Button, HStack, VStack, Center, Text } from '@chakra-ui/react'

function Header(){

    return (
        <div>
            <VStack divider={<StackDivider />} spacing={4} align='stretch'>
            <Box sx={{
                backgroundImage: "url('../public/images/img.png')",
                backgroundSize: '1000px 300px',
                height: '300px',
                width: '1000px'
            }}>
                <Center h='300px'>
                    <VStack spacing='20px'>
                        <Text color='white' textTransform='uppercase' fontSize='3xl'>Domina el terreno</Text>
                        <HStack spacing='20px'>
                            <Button type='submit' variant='outline' color='white' textTransform='uppercase' borderRadius='0px'>Ver Detalles</Button>
                            <Button type='submit' variant='outline' color='white' textTransform='uppercase' borderRadius='0px'>Ver Video</Button>
                        </HStack>
                    </VStack>
                </Center>
            </Box>
            <Box sx={{
                backgroundImage: "url('../public/images/img.png')",
                backgroundSize: '300px 200px',
                height: '200px',
                width: '300px'
            }}>
                <Center h='200px'>
                    <VStack spacing='10px'>
                        <Text color='white' textTransform='uppercase' fontSize='2xl'>Domina el terreno</Text>
                        <VStack spacing='10px' align='stretch' w='290px'>
                            <Button type='submit' variant='outline' color='white' textTransform='uppercase' borderRadius='0px'>Ver Detalles</Button>
                            <Button type='submit' variant='outline' color='white' textTransform='uppercase' borderRadius='0px'>Ver Video</Button>
                        </VStack>
                    </VStack>
                </Center>
            </Box>
            </VStack>
        </div>
    );
}

export default Header;