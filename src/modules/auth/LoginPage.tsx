import { Heading, Container, Text, Input, Button } from "@chakra-ui/react";

export default function LoginPage() {
  return (
    <Container maxW="630px" mt="150px" px="40px" border="1px solid black">
      <Heading textAlign="center">CHAT UVV</Heading>
      <Text fontFamily="Iceland" fontSize="24px">
        Organize pesquisas e faça documentos de maneira prática e rápida
      </Text>
      <Input />
      <Input />
      <Button>LOG IN</Button>
      <Text>Não tem conta? Registre-se aqui.</Text>
    </Container>
  )
}
