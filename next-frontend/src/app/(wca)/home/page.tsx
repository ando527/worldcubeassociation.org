import {
  Card,
  Link,
  Heading,
  Button,
  Box,
  Separator,
  Text,
  SimpleGrid,
  GridItem,
  Image,
} from "@chakra-ui/react";

export default async function home() {
  return (
    <SimpleGrid columns={1} rows={6} gap={8} p={8}>
      <Card.Root
        variant="info"
        flexDirection="row"
        overflow="hidden"
        colorPalette="blue"
      >
        <Box
          position="relative"
          flex="1"
          minW="50%"
          maxW="50%"
          overflow="hidden"
        >
          <Image
            src="merch.png"
            alt="Cubing event"
            objectFit="cover"
            width="100%"
            height="100%"
          />
          {/* Blue Gradient Overlay */}
          <Box
            position="absolute"
            top="0"
            right="0"
            bottom="0"
            left="50%"
            style={{
              backgroundImage:
                "linear-gradient(to right, transparent, var(--chakra-colors-blue-100))",
            }}
            zIndex="1"
          />
        </Box>

        <Card.Body
          flex="1"
          zIndex="2"
          color="white"
          p="8"
          bg="blue.100"
          justifyContent="center"
          pr="15%"
        >
          <Heading size="4xl" color="yellow.50" mb="4">
            WELCOME TO THE WORLD OF SPEEDCUBING
          </Heading>
          <Text fontSize="md">
            At the World Cube Association, we bring cubers together to twist,
            solve, and compete in the ultimate test of skill and speed.
          </Text>
        </Card.Body>
      </Card.Root>

      <SimpleGrid columns={4} rows={1} gap={8}>
        <GridItem colSpan={2} display="flex">
          <Card.Root variant="info" colorPalette="green" size="lg">
            <Card.Body>
              <Card.Title>Twist, Solve, Compete</Card.Title>
              <Card.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Card.Description>
            </Card.Body>
          </Card.Root>
        </GridItem>
        <GridItem colSpan={1} display="flex">
          <Card.Root variant="info" size="lg">
            <Card.Body>
              <Card.Title>Support the WCA</Card.Title>
              <Separator size="md" />
              <Card.Description>
                The World Cube Association is a 501(c)(3) tax-exempt
                organization. <br />
                <br />
                As a 100% volunteer-led nonprofit, we welcome your donations to
                help us further our vision of having more enjoyable competitions
                all over the world.
              </Card.Description>
              <Button mr="auto">Learn more</Button>
            </Card.Body>
          </Card.Root>
        </GridItem>
        <GridItem colSpan={1} display="flex">
          <Card.Root variant="info" size="lg">
            <Card.Body>
              <Card.Title>Get in touch!</Card.Title>
              <Separator size="md" />
              <Card.Description>
                If you wish to contact us, you can do so through our contact
                form or any of our social media platforms. <br />
                <br />
                If you have any questions about the different processes of the
                WCA, make sure to go through our{" "}
                <Link hoverArrow="true">Frequently Asked Questions!</Link>
              </Card.Description>
              <Button mr="auto">Take me to the WCA contact form</Button>
            </Card.Body>
          </Card.Root>
        </GridItem>
      </SimpleGrid>
      <Card.Root>
        <Card.Body>
          <Text>Test</Text>
        </Card.Body>
      </Card.Root>

      <SimpleGrid columns={2} rows={1} gap={8}>
        <SimpleGrid columns={2} rows={2} gap={8}>
          <Card.Root overflow="hidden" variant="hero" colorPalette="green">
            <Image src="about.png" alt="About the WCA" aspectRatio={2 / 1} />
            <Card.Body p={6}>
              <Heading size="3xl" textTransform="uppercase">
                About Us
              </Heading>
            </Card.Body>
          </Card.Root>
          <Card.Root overflow="hidden" variant="hero" colorPalette="red">
            <Image
              src="competitions.png"
              alt="WCA Competitions"
              aspectRatio={2 / 1}
            />
            <Card.Body p={6}>
              <Heading size="3xl" textTransform="uppercase">
                Competitions
              </Heading>
            </Card.Body>
          </Card.Root>
          <Card.Root overflow="hidden" variant="hero" colorPalette="blue">
            <Image src="merch.png" alt="WCA Merchandise" aspectRatio={2 / 1} />
            <Card.Body p={6}>
              <Heading size="3xl" textTransform="uppercase">
                Merchandise
              </Heading>
            </Card.Body>
          </Card.Root>
          <Card.Root overflow="hidden" variant="hero" colorPalette="orange">
            <Image src="records.png" alt="WCA Records" aspectRatio={2 / 1} />
            <Card.Body p={6}>
              <Heading size="3xl" textTransform="uppercase">
                Records
              </Heading>
            </Card.Body>
          </Card.Root>
        </SimpleGrid>
        <Card.Root variant="info" colorPalette="blue">
          <Card.Body>
            <Text>Announcements</Text>
          </Card.Body>
        </Card.Root>
      </SimpleGrid>

      <SimpleGrid columns={3} rows={1} gap={8}>
        <GridItem colSpan={2} display="flex">
          <Card.Root
            variant="info"
            flexDirection="row"
            overflow="hidden"
            colorPalette="green"
          >
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              maxW="1/3"
            />
            <Card.Body>
              <Card.Title>
                &ldquo;I Can&apos;t Wait for the next one!&ldquo;
              </Card.Title>
              <Separator size="md" />
              <Card.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Card.Description>
            </Card.Body>
          </Card.Root>
        </GridItem>
        <GridItem colSpan={1} display="flex">
          <Card.Root variant="info">
            <Card.Body>
              <Card.Title>See what competitors have to say</Card.Title>
              <Separator size="md" />
              <Card.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. <br />
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </Card.Description>
              <Button>Test Button</Button>
            </Card.Body>
          </Card.Root>
        </GridItem>
      </SimpleGrid>

      <SimpleGrid columns={3} rows={1} gap={8}>
        <GridItem colSpan={1} display="flex">
          <Card.Root variant="info">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              aspectRatio="3/1"
            />
            <Card.Body>
              <Card.Title>Test Heading</Card.Title>
              <Separator size="md" />
              <Card.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Card.Description>
              <Button>Learn More</Button>
            </Card.Body>
          </Card.Root>
        </GridItem>
        <GridItem colSpan={2} display="flex">
          <Card.Root variant="info" colorPalette="red">
            <Card.Body>
              <Card.Title>Upcoming Competitions</Card.Title>
              <Separator size="md" />
              <Card.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Card.Description>
            </Card.Body>
          </Card.Root>
        </GridItem>
      </SimpleGrid>
    </SimpleGrid>
  );
}
