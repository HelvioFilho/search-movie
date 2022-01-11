import React from 'react';
import { ModalLinkProps } from '../../../utils/interface';
import { Container, CustomText, IconButton } from '../../atoms';
import { WebView } from 'react-native-webview';

export function ModalLink({ link, title, closeModal }: ModalLinkProps) {
  return (
    <>
      <Container
        bg="bg"
        direction="row"
        justify="space-between"
        align="center"
        mt={40}
        pt={10}
        pb={10}
        pr={10}
        pl={10}
      >
        <CustomText
          size={18}
          fontFamily="bold"
          width="80%"
        >{title}</CustomText>
        <IconButton
          feather="x"
          size={35}
          color="white"
          onPress={closeModal}
        />
      </Container>
      <WebView
        source={{ uri: link }}
      />
    </>
  );
}