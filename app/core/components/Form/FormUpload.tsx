import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Image,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  ComponentPropsWithoutRef,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Accept, useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';
import { BsTrash } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { FiPaperclip } from 'react-icons/fi';

type Props = {
  name: string;
  label?: string;
  accept?: Accept;
  required?: boolean;
  labelProps?: ComponentPropsWithoutRef<'label'>;
};

const FormUpload = forwardRef<HTMLInputElement, Props>(
  ({ name, label, accept, required, labelProps }, ref) => {
    const [isTouched, setTouched] = useState(false);
    const {
      register,
      unregister,
      setValue,
      watch,
      formState: { isSubmitting },
    } = useFormContext();
    const files = watch(name);
    const onDrop = useCallback(
      (droppedFiles: any) => {
        setValue(name, droppedFiles, { shouldValidate: true });
      },
      [setValue, name],
    );
    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept,
    });
    useEffect(() => {
      register(name);
      return () => {
        unregister(name);
      };
    }, [register, unregister, name]);

    const removeHandler = (_id: string) => {
      const newImages = files?.filter((item: { name: string }) => item.name !== _id);

      setValue(name, newImages);

      setValue(_id, undefined);
    };

    useEffect(
      () => () => {
        files?.forEach((file: { preview: any }) =>
          URL.revokeObjectURL(file.preview || ''),
        );
      },
      [files],
    );

    const thumbs = files?.map((file: { name: string; preview: string }) => (
      <Box
        w="100%"
        p={2}
        key={file.name}
        pos="relative"
        borderWidth={1}
        borderColor="gray.200"
        rounded="md"
        bg="rgba(54,122,254,0.1)"
        color="secondary"
      >
        {isSubmitting && (
          <Flex
            align="center"
            justify="center"
            pos="absolute"
            inset={0}
            h="full"
            w="full"
            bg="rgba(255, 255,255,.6)"
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Flex>
        )}
        {file?.preview ? (
          <>
            <Image w="full" h="auto" fit="cover" src={file?.preview} alt={file?.name} />
            <Flex
              align="center"
              justify="center"
              as="button"
              role="button"
              aria-label="remove button"
              pos="absolute"
              right={0}
              top={0}
              zIndex={10}
              w={8}
              h={8}
              rounded="full"
              bg="primary.500"
              color="white"
              onClick={() => removeHandler(file.name || '')}
            >
              <Icon as={BsTrash} />
            </Flex>
          </>
        ) : (
          <Stack
            w={{ md: 20 }}
            spacing="-0.1rem"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
          >
            <Icon boxSize={6} as={CgFileDocument} />
            <Text fontSize="sm" textAlign="left" noOfLines={1}>
              {file?.name}
            </Text>
          </Stack>
        )}
      </Box>
    ));

    return (
      <FormControl isRequired={required} ref={ref} onMouseLeave={() => isTouched}>
        <FormLabel fontSize="sm" {...labelProps}>
          {label}
        </FormLabel>
        <HStack spacing="1.5rem">
          <Box
            cursor="pointer"
            p={5}
            w={{ md: 80 }}
            rounded="md"
            bg="white"
            borderWidth="1px"
            borderColor="primary"
            borderStyle="dashed"
            {...getRootProps({
              className: 'dropzone',
              onClick: () => setTouched(true),
            })}
          >
            <input {...getInputProps()} />

            <HStack spacing="1rem" justify="center" align="center" color="primary">
              <Icon as={FiPaperclip} />
              <Text fontSize="sm" ml={2} color="primary">
                Browse or drag & drop
              </Text>
            </HStack>
          </Box>
          <Box>{files?.length >= 1 && <Box>{thumbs}</Box>}</Box>
        </HStack>
      </FormControl>
    );
  },
);

FormUpload.displayName = 'FormUpload';

export default FormUpload;
