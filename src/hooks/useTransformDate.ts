const useTransformDate = (date: string) => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  const reservedDate = date.split(' ')[0]; // 예약 날짜
  const reservedDay = week[new Date(date).getDay()]; // 요일
  const reservedTime = date.split(' ')[1].split(':').splice(1).join(':'); // 예약 시간

  return { date: reservedDate, day: reservedDay, time: reservedTime };
};

export default useTransformDate;
