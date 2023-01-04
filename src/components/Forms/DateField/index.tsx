import styled from '@emotion/styled';
import { DatePicker, Space } from 'antd';
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';
import { CenterAlign } from '../../../../styles/global';

const DateField = () => {
  const onChange = (
    value: DatePickerProps['value'] | RangePickerProps['value'],
    dateString: [string, string] | string
  ) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };

  const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
    console.log('onOk: ', value);
  };

  return (
    <Container>
      <DatePicker showTime onChange={onChange} onOk={onOk} />
    </Container>
  );
};

const Container = styled(CenterAlign)``;

export default DateField;
