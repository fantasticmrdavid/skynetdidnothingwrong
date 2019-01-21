import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.main`
  width: 100%;
  max-width: 900px;
  padding-bottom: 3em;
`;

export const HeartbeatMonitorWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  left: calc(50% - 580px);
`;

export const LogStoryBg = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0px;
  right: 0px;
  width: 40%;
  height: 100%;
`;
