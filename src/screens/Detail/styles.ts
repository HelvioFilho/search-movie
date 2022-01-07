import styled from 'styled-components/native';

export const HeaderDetail = styled.View`
  z-index: 99;
  position: absolute;
  top: ${({ theme }) => theme.metrics.px(35)}px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 0px;
  padding-top: 0px;
  padding-left: ${({ theme }) => theme.metrics.px(24)}px;
  padding-right: ${({ theme }) => theme.metrics.px(24)}px;
`;