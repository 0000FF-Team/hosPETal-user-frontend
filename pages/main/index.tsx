import styled from '@emotion/styled';
import { COLORS } from 'config/styles';
import SearchIcon from '../../public/images/SearchIcon.svg';

const MainPage = () => {
  return (
    <Container>
      <MapContainer>
        <Float>
          <SearchBar>
            <input placeholder="검색하기" />
            <SearchIcon fill="#333" className="searchIcon" />
          </SearchBar>
          <button>목록보기</button>
        </Float>
      </MapContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.LIGHT100};
`;
const Float = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 95%;
  button {
    background-color: #fff;
    width: 120px;
    height: 50px;
    border-radius: 8px;
  }
`;
const SearchBar = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 8px;
  padding: 0 15px;
  input {
    font-size: 17px;
    width: 80%;
    padding: 20px 0;
  }
  .searchIcon {
    cursor: pointer;
  }
`;

export default MainPage;
