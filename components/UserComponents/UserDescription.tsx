import {
  Avatar, Box, Center, Flex, Input, Text,
  Editable, EditableInput, EditablePreview,
  Link, List, ListItem,
  Tab, TabList, TabPanel, TabPanels, Tabs,
  Tag, TagLabel,
  useColorModeValue
} from '@chakra-ui/react'

import { EditableControls } from 'components'
import { useState } from 'react'
import { UpdateDescriptionHandler } from '../../lib/UserDescripFuncs'

export const UserDescription = ({
  description,
  instruments,
  roles
}: UserDescriptionProps) => {

  const [editDescrip, setDescrip] = useState('')
  const [editInstrument, setInstrument] = useState('')

  return (
    <Box w="16rem">
      <Tabs variant="soft-rounded" colorScheme={useColorModeValue('blue', 'green')}>
        <TabList>
          <Tab>Bio</Tab>
          <Tab>Bands</Tab>
          <Tab>Instruments</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Editable
              display="flex"
              gap={2}
              onSubmit={() => UpdateDescriptionHandler('bio', editDescrip)}
              defaultValue={description}
              fontSize="lg"
              fontWeight="bold"
            >
              <EditablePreview />
              <Input onChange={(e) => setDescrip(e.target.value)} as={EditableInput} />
              <EditableControls />
            </Editable>
          </TabPanel>
          <TabPanel>
            <Center>
              <List fontSize="lg" fontWeight="bold">
                {roles.map((role) => {
                  return (
                    <Flex key={role.id} justifyContent="space-between" mb="1rem">
                      <Tag
                        size="xl"
                        colorScheme={useColorModeValue('blue', 'green')}
                        borderRadius="full"
                      >
                        <Avatar size="sm" mr={2} src={role.image}/>
                        <TagLabel fontWeight="bold" mr={3} key={role.name}>
                          <Link href={`/bands/${role.id}`}>{role.name}</Link>
                        </TagLabel>
                      </Tag>
                    </Flex>
                  )
                })}
              </List>
            </Center>
            {roles.length ? (
              <></>
            ) : (
              <Text textAlign="center" fontWeight="bold">
                You aren't apart of any bands!
              </Text>
            )}
          </TabPanel>
          <TabPanel>
            <List fontSize="lg" textAlign="center" fontWeight="bold">
              {instruments.map((instrument) => {
                return <ListItem key={instrument.id}>• {instrument.instrument}</ListItem>
              })}
            </List>
            <Editable
              textAlign="center"
              onSubmit={() => UpdateDescriptionHandler('instruments', editInstrument)}
              defaultValue="Add a new instrument"
              fontSize="lg"
            >
              <EditablePreview />
              <Input onChange={(e) => setInstrument(e.target.value)} as={EditableInput} />
              <EditableControls />
            </Editable>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
