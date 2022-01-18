import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Container, CustomText } from '../../atoms';
import { ButtonModal, IconX } from './styles';
import { defaultTheme } from '../../../global';

interface ModalAlertProps {
  alertMessage: string;
  closeModal: () => void;
  delFavoriteModal: () => void;
  choice: boolean;
}

export function ModalAlert({ alertMessage, closeModal, delFavoriteModal, choice }: ModalAlertProps) {
  return (
    <Container
      bg="bgIcon"
      height="100%"
      justify="center"
      align="center"
    >
      <Container
        bg="clean"
        height={150}
        width="90%"
        justify="center"
        align="center"

        br={40}
      >
        <IconX
          onPress={() => closeModal()}
          activeOpacity={0.8}
        >
          <Feather
            name="x-octagon"
            size={30}
            color={defaultTheme.colors.white}
          />
        </IconX>
        <CustomText
          size={16}
          width={170}
        >{alertMessage}</CustomText>
        {choice &&
          <Container
            bg="clean"
            width="90%"
            height={50}
            direction="row"
            pt={5}
            pl={50}
            pr={50}
            justify="space-between"
            align="center"
          >

            <ButtonModal
              color="cta"
              onPress={() => closeModal()}
            >
              <CustomText>Não</CustomText>
            </ButtonModal>
            <ButtonModal
              color="success"
              onPress={() => delFavoriteModal()}
            >
              <CustomText>Sim</CustomText>
            </ButtonModal>
          </Container>
        }
      </Container>
    </Container>
  );
}