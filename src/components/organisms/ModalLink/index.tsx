import React from 'react';
import { ModalLinkProps } from '../../../utils/interface';
import { Container, CustomText, IconButton } from '../../atoms';
import { WebView } from 'react-native-webview';
import { ActivityIndicator, Linking } from 'react-native';
import { defaultTheme } from '../../../global';

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
        originWhitelist={['*']}
        useWebKit={true}
        source={{ uri: link }}
        startInLoadingState={true}
        renderLoading={() =>
          <Container
            flex={1}
            align="center"
          >
            <CustomText color="black" mb={10} >Carregando...</CustomText>
            <ActivityIndicator size="large" color={defaultTheme.colors.black} />
          </Container>
        }

        onError={() => {
          Linking.openURL(link);
        }}

        renderError={(error) => (
          <Container height="100%" justify="center" align="center">
            <CustomText
              color="black"
              size={16}
              pt={20}
              fontFamily="bold"
            >
              Sua página foi aberta no navegador ou outro dispositivo!
            </CustomText>
          </Container>
        )}
      />
    </>
  );
}