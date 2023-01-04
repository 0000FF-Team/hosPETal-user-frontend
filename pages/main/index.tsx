import styled from '@emotion/styled';
import { COLORS } from 'config/styles';
import { useRouter } from 'next/router';
import { KeyboardEvent } from 'react';
import SearchIcon from '../../public/images/SearchIcon.svg';
import { CenterAlign, SearchField } from '../../styles/global';

const MainPage = () => {
  const router = useRouter();

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' ? router.push('/search') : null;
  };

  return (
    <MapContainer>
      <Float>
        <SearchBar>
          <input type="text" placeholder="검색하기" onKeyUp={(e) => handleSubmit(e)} />
          <button type="submit">
            <SearchIcon fill="#333" className="searchIcon" />
          </button>
        </SearchBar>
        <button className="listButton" onClick={() => router.push('/main/list')}>
          목록보기
        </button>
      </Float>
    </MapContainer>
  );
};

const MapContainer = styled(CenterAlign)`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.PRIMARY100};
`;
const Float = styled(CenterAlign)`
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  height: 95%;
  z-index: 1;
  .listButton {
    background-color: #fff;
    width: 120px;
    height: 50px;
    border-radius: 8px;
  }
`;
const SearchBar = styled(SearchField)`
  width: 90%;
  flex-direction: row;
  background-color: #fff;
  border-radius: 8px;
`;

export default MainPage;
