import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return (
    <Container maxW={'container.xl'}
    h={'100vh'}
    p={'16'}>

        <VStack color={'purple.500'}
        h={'full'}
        justifyContent={'center'}
        >
        <AiOutlineCloudUpload size={'10vmax'} />

        <form>
            <HStack border={'0px'}>
                <Input required type='file' p={'4px'}/>
                <Button colorScheme={'purple'} type={'submit'}>
                    upload
                </Button>
             </HStack>
        </form>
        </VStack>

    </Container>
  )
}

export default Upload