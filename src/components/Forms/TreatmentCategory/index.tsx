import styled from '@emotion/styled';
import React, { useState } from 'react';

const tretments = [
  {
    category: 'surgery',
    title: '수술/치료',
    details: [
      '비뇨산부의학과',
      '정형외과',
      '종양의학과',
      '치과',
      '안과',
      '일반외과',
      '일반내과',
      '이비인후과',
      '심장의학과',
      '감염내과',
      '소화기과',
      '응급의학과',
      '재활의학과',
      '피부과',
    ],
  },
  {
    category: 'vaccination',
    title: '예방접종',
    details: ['예방의학과', '감염내과'],
  },
  {
    category: 'checkup',
    title: '검진/검사',
    details: [
      '진단검사의학과',
      '알레르기내과',
      '심장의학과',
      '영상의학과',
      '감염내과',
      '안과',
      '치과',
      '종양의학과',
      '피부과',
      '신장의학과',
      '소화기과',
      '정형외과',
    ],
  },
  {
    category: 'etc',
    title: '기타',
    details: [],
  },
];

const SURGERY = 'surgery';
const VACCINATION = 'vaccination';
const CHECKUP = 'checkup';
const ETC = 'etc';

const TreatmentCategory = () => {
  const [categoryState, setCategoryState] = useState('');

  const [detailState, setDetailState] = useState({
    surgery: '',
    vaccination: '',
    checkup: '',
    etc: '',
  });

  const handleCategoryRadioChange = (radioName: string) => {
    setCategoryState(radioName);
  };

  return (
    <Layout>
      <form>
        {tretments.map((treatment, index) => (
          <div key={index}>
            <input
              type="radio"
              id={treatment.category}
              value={treatment.category}
              checked={categoryState === treatment.category}
              onChange={() => handleCategoryRadioChange(treatment.category)}
            />
            <label htmlFor={treatment.category}>{treatment.title}</label>
          </div>
        ))}
        <p></p>
      </form>
    </Layout>
  );
};

const Layout = styled.div`
  form {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }
  label {
    cursor: pointer;
    padding-left: 30px;
    padding-right: 10px;
    padding-bottom: 5px;
    background-repeat: no-repeat;
  }
  input[type='radio'] {
    display: none;
  }
  input[type='radio'] + label {
    background-image: url('/images/Box.svg');
  }
  input[type='radio']:checked + label {
    background-image: url('/images/CheckBox.svg');
  }
`;

export default TreatmentCategory;
