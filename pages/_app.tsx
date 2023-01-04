import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import horLogo from '../public/images/horLogo.png';
import SearchIcon from '../public/images/SearchIcon.svg';
import { CenterAlign, global, SearchField } from '../styles/global';
import { COLORS } from 'config/styles';
import MediaOnlyDiv from 'components/MediaOnlyDiv';
import NavigationBar from 'components/NavigationBar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={global} />
      <Container>
        <MediaOnlyDiv media="desktop">
          <Layout>
            <MainContainer>
              <Image
                src={horLogo}
                alt="horLogo"
                width={200}
                onClick={() => router.push('/')}
                priority
              />
              <Info>
                <h1>동물병원 예약</h1>
                <p>{`이제는 빠르고 간편하게\n주변 동물병원을 찾고 예약해보세요!`}</p>
                <SearchBar>
                  <input placeholder="병원 이름을 검색해보세요" />
                  <button type="submit">
                    <SearchIcon fill="#333" className="searchIcon" />
                  </button>
                </SearchBar>
              </Info>
              <div />
              <div />
            </MainContainer>
            <AppDisplay>
              <PageDisplay>
                <Component {...pageProps} />
              </PageDisplay>
              <NavigationBar />
            </AppDisplay>
          </Layout>
        </MediaOnlyDiv>

        <MediaOnlyDiv media="tablet">
          <Layout>
            <AppDisplay>
              <PageDisplay>
                <Component {...pageProps} />
              </PageDisplay>
              <NavigationBar />
            </AppDisplay>
          </Layout>
        </MediaOnlyDiv>

        <MediaOnlyDiv media="mobile">
          <Layout>
            <AppDisplay>
              <PageDisplay>
                <Component {...pageProps} />
              </PageDisplay>
              <NavigationBar />
            </AppDisplay>
          </Layout>
        </MediaOnlyDiv>
      </Container>
    </QueryClientProvider>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`;
const Layout = styled(CenterAlign)``;
const MainContainer = styled.div`
  width: 512px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  img {
    cursor: pointer;
  }
`;
const AppDisplay = styled.div`
  background-color: #fff;
  max-width: 420px;
  width: 100%;
  height: 100%;
`;
const PageDisplay = styled.div`
  max-width: 420px;
  width: 100%;
  height: 100%;
  padding-top: 60px;
  border: 1px solid ${COLORS.GRAY300};
  border-bottom: none;
  box-sizing: border-box;

  position: fixed;
  bottom: 60px;

  overflow-y: scroll;
  -ms-overflow-style: none; /* IE */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera, Edge */
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
  h1 {
    color: ${COLORS.PRIMARY};
    font-size: 45px;
  }
  p {
    color: ${COLORS.GRAY500};
    font-size: 18px;
    white-space: pre-wrap;
    line-height: 25px;
  }
  input {
    width: 90%;
    color: ${COLORS.DARK};
    padding: 10px 0;
  }
`;
const SearchBar = styled(SearchField)`
  border: 1px solid ${COLORS.GRAY300};
  border-radius: 50px;
`;
