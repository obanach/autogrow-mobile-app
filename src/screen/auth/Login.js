import {Box, Button, Center, FormControl, Heading, Input, VStack} from "native-base";
import {useState} from "react";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Center w="100%" pt='10'>
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
            color: "warmGray.50"
          }}>
              Welcome
            </Heading>
            <Heading mt="1" _dark={{
            color: "warmGray.200"
          }} color="coolGray.600" fontWeight="medium" size="xs">
              Sign in to continue!
            </Heading>

            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Username</FormControl.Label>
                <Input onChangeText={setUsername} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" onChangeText={setPassword} />
              </FormControl>
              <Button mt="2" colorScheme="indigo">
                Login
              </Button>
            </VStack>
          </Box>
        </Center>
    )
}

export default Login;