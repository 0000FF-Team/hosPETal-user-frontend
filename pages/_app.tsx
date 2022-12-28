import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import horLogo from '../public/images/horLogo.png';
import SearchIcon from '../public/images/SearchIcon.svg';
import { global } from '../styles/global';
import { COLORS } from 'config/styles';
import MediaOnlyDiv from 'components/MediaOnlyDiv';
import NavigationBar from 'components/NavigationBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={global} />
      <Container>
        <MediaOnlyDiv media="desktop">
          <ContentsLayout>
            <MainContainer>
              <Image src={horLogo} alt="horLogo" width={200} />
              <Info>
                <h1>동물병원 예약</h1>
                <p>이제는 빠르고 간편하게 주변의 동물병원을 찾고 예약해보세요!</p>
                <SearchBar>
                  <input placeholder="병원 이름을 검색해보세요" />
                  <SearchIcon fill="#333" />
                </SearchBar>
              </Info>
              <div />
              <div />
            </MainContainer>
            <UserApp>
              <Component {...pageProps} />
              <NavigationBar />
            </UserApp>
          </ContentsLayout>
        </MediaOnlyDiv>

        <MediaOnlyDiv media="tablet">
          <ContentsLayout>
            <UserApp>
              <Component {...pageProps} />
              <NavigationBar />
            </UserApp>
          </ContentsLayout>
        </MediaOnlyDiv>

        <MediaOnlyDiv media="mobile">
          <ContentsLayout>
            <UserApp>
              <Component {...pageProps} />
              <NavigationBar />
            </UserApp>
          </ContentsLayout>
        </MediaOnlyDiv>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`;
const ContentsLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainContainer = styled.div`
  width: 512px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const UserApp = styled.div`
  max-width: 420px;
  width: 100%;
  height: 100vh;
  border: 1px solid #eee;
  box-sizing: border-box;
  overflow-y: scroll;
  padding-bottom: 60px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
  h1 {
    color: ${COLORS.PRIMARY};
  }
  p {
    color: #9f9f9f;
  }
  input {
    width: 90%;
    color: #020309;
    padding: 10px 0;
  }
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #eee;
  border-radius: 50px;
  padding: 15px;
  .searchIcon {
    cursor: pointer;
  }
`;
