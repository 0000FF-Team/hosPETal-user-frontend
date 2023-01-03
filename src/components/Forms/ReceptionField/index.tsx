import styled from '@emotion/styled';
import React, { useState } from 'react';
import { CommonInput } from '../../../../styles/global';
import { COLORS } from 'config/styles';

const GENDER = 'gender';
const SPECIES = 'species';
const NEUTERED = 'neutered';

const ReceptionField = () => {
  const [radioState, setRadioState] = useState({
    gender: '',
    species: '',
    neutered: '',
  });

  const handleRadioChange = (category: string, radioName: string) => {
    setRadioState({
      ...radioState,
      [category]: radioName,
    });
  };

  return (
    <Layout>
      <form>
        <Field>
          <b>이름</b>
          <CommonInput placeholder="접수할 이름을 입력해주세요" />
        </Field>

        <Field>
          <b>성별</b>
          <div>
            <input
              type="radio"
              id="male"
              value="male"
              checked={radioState.gender === 'male'}
              onChange={() => handleRadioChange(GENDER, 'male')}
            />
            <label htmlFor="male">남</label>

            <input
              type="radio"
              id="female"
              value="female"
              checked={radioState.gender === 'female'}
              onChange={() => handleRadioChange(GENDER, 'female')}
            />
            <label htmlFor="female">여</label>
          </div>
        </Field>

        <Field>
          <b>나이</b>
          <CommonInput type="number" min={0} max={50} placeholder="나이를 입력해주세요" />
        </Field>

        <Field>
          <b>체중(kg)</b>
          <CommonInput type="number" placeholder="체중을 입력해주세요" />
        </Field>

        <Field>
          <b>종</b>
          <div>
            <input
              type="radio"
              id="dog"
              value="dog"
              checked={radioState.species === 'dog'}
              onChange={() => handleRadioChange(SPECIES, 'dog')}
            />
            <label htmlFor="dog">강아지</label>

            <input
              type="radio"
              id="cat"
              value="cat"
              checked={radioState.species === 'cat'}
              onChange={() => handleRadioChange(SPECIES, 'cat')}
            />
            <label htmlFor="cat">고양이</label>
          </div>
        </Field>

        <Field>
          <b>품종</b>
          <CommonInput placeholder="품종을 입력해주세요" />
        </Field>

        <Field>
          <b>중성화 여부</b>
          <div>
            <input
              type="radio"
              id="done"
              value="done"
              checked={radioState.neutered === 'done'}
              onChange={() => handleRadioChange(NEUTERED, 'done')}
            />
            <label htmlFor="done">했음</label>

            <input
              type="radio"
              id="none"
              value="none"
              checked={radioState.neutered === 'none'}
              onChange={() => handleRadioChange(NEUTERED, 'none')}
            />
            <label htmlFor="none">안했음</label>

            <input
              type="radio"
              id="dontKnow"
              value="dontKnow"
              checked={radioState.neutered === 'dontKnow'}
              onChange={() => handleRadioChange(NEUTERED, 'dontKnow')}
            />
            <label htmlFor="dontKnow">잘모름</label>
          </div>
        </Field>

        <Field>
          <b>특이{`\n`}사항</b>
          <TextareaBox
            placeholder={`예) 예방접종/약에 대한 과민반응, 수혈받은 이력, 복용중인 약, 질병여부, 생활 습관 등`}
          />
        </Field>
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
const Field = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 5fr;
  grid-column-gap: 20px;
  b {
    text-align: center;
    white-space: pre-line;
  }
`;
const TextareaBox = styled.textarea`
  height: 100px;
  border: 1px solid ${COLORS.GRAY300};
  border-radius: 10px;
  padding: 15px;
  box-sizing: border-box;
  resize: none;
`;

export default ReceptionField;
