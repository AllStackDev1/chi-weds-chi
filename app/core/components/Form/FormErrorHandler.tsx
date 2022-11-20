import { Fade, Flex, IconButton, Text } from '@chakra-ui/react';
import { FC, MouseEventHandler } from 'react';
import { FiX } from 'react-icons/fi';

interface IProps {
  error: any;
  touched?: boolean | any;
  onClear: MouseEventHandler<HTMLElement>;
}

const FormErrorHandler: FC<IProps> = ({ onClear, error, touched }) => (
  <Fade in={!!error && touched}>
    <Flex
      borderBottomRadius="md"
      justify="space-between"
      align="center"
      bgColor="white"
      color="red.500"
      pos="absolute"
      zIndex={10}
      shadow="md"
      w="full"
      p={3}
    >
      <Text
        fontSize="xs"
        dangerouslySetInnerHTML={{
          __html: error,
        }}
      />
      <IconButton
        boxSize={6}
        icon={<FiX />}
        bg="transparent"
        aria-label="close"
        onClick={onClear}
        _hover={{ bg: 'transparent' }}
        _focus={{ bg: 'transparent' }}
        _active={{ bg: 'transparent' }}
      />
    </Flex>
  </Fade>
);

export default FormErrorHandler;
