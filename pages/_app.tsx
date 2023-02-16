import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import horLogo from '../public/images/horLogo.png';
import SearchIcon from '../public/images/SearchIcon.svg';
import { CenterAlign, global, SearchField } from '../styles/global';
import { COLORS } from 'config/styles';
import NavigationBar from 'components/NavigationBar';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const router = useRouter();
  const [screen, setScreen] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const searchInput = useRef<HTMLInputElement>(null);

  let timer: NodeJS.Timer;
  const resizeWindow = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setScreen(window.innerWidth);
    }, 100);
  };

  useEffect(() => {
    setScreen(window.innerWidth);
    window.addEventListener('resize', resizeWindow);
    screen > 1024 ? setIsDesktop(true) : setIsDesktop(false);
    console.log(searchInput.current?.value);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, [screen]);

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' ? router.push(`/search?q=${searchInput.current?.value}`) : null;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Global styles={global} />
        <Container>
          <Layout>
            {isDesktop ? (
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
                    <input
                      placeholder="병원 이름을 검색해보세요"
                      onKeyUp={(e) => handleSubmit(e)}
                      ref={searchInput}
                    />
                    <button type="submit">
                      <SearchIcon fill="#333" className="searchIcon" />
                    </button>
                  </SearchBar>
                </Info>
                <div />
                <div />
              </MainContainer>
            ) : null}
            <AppDisplay>
              <PageDisplay>
                <Component {...pageProps} />
              </PageDisplay>
              <NavigationBar />
            </AppDisplay>
          </Layout>
        </Container>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.PRIMARY100};
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
  background-color: #fff;
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
    color: #616c89;
    font-size: 16px;
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
  border-radius: 50px;
  background-color: #fff;
`;
