import styled from '@emotion/styled';
import SearchIcon from '../../../public/images/SearchIcon.svg';
import Chart from '../../../public/images/Chart.svg';
import Account from '../../../public/images/Account.svg';
import { COLORS } from 'config/styles';

const NavigationBar = () => {
  return (
    <NavBar>
      <Tab>
        <SearchIcon fill="#333" />
        <p>병원 예약</p>
      </Tab>
      <Tab>
        <Chart stroke="#333" />
        <p>진료 내역</p>
      </Tab>
      <Tab>
        <Account fill="#333" />
        <p>마이 페이지</p>
      </Tab>
    </NavBar>
  );
};

const NavBar = styled.div`
  background-color: #fff;
  border: 1px solid ${COLORS.GRAY300};
  border-top: none;
  box-sizing: border-box;

  display: flex;
  justify-content: space-around;

  max-width: 420px;
  width: 100%;
  height: 60px;

  position: fixed;
  bottom: 0;
  right: calc((100vw- (512px + 420px)) / 2);
  z-index: 100;
`;
const Tab = styled.div`
  p {
    display: inline-block;
    font-size: 13px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export default NavigationBar;
