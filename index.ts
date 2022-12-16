// Bai1
const getCurrentDate = (str: string): string => {
  const today =
    new Date().getDate() +
    str +
    (new Date().getMonth() + 1) +
    str +
    new Date().getFullYear();
  return today;
};

// Bai2
const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month, 0).getDate();
};

// Bai3
const checkEndWeek = (day: number, month: number, year: number): boolean => {
  const check = new Date(year, month - 1, day).getDay();
  const isEndWeek = check === 0 ? true : false;
  return isEndWeek;
};

// Bai4
const totalMinute = (hour: number, minute: number): number => {
  return hour * 60 + minute;
};

// Bai5
const getDayFromBeginYear = (): number => {
  const today = new Date().getTime();
  const currentYear = new Date().getFullYear();
  const beginYear = new Date(currentYear, 1, 1).getTime();
  const numbersOfDay = Math.floor((today - beginYear) / (1000 * 60 * 60 * 24));
  return numbersOfDay;
};

// Bai6
const calculate_age = (date: Date): number => {
  const currentYear = new Date().getFullYear();
  const yearOfBirth = date.getFullYear();
  return currentYear - yearOfBirth;
};

// Bai7
const startOfWeek = (date: Date): string => {
  const convertDate = new Date(
    date.getFullYear(),
    date.getMonth() - 1,
    date.getDate()
  );
  const checkNumber = convertDate.getDay();
  const startWeek = convertDate.getDate() - checkNumber + 1;
  return (
    startWeek +
    "-" +
    (convertDate.getMonth() + 1) +
    "-" +
    convertDate.getFullYear()
  );
};

// Bai8

const endOfMonth = (now: Date): string => {
  const date = new Date(now);
  const month = date.getMonth() + 1;
  console.log(month);
  const year = date.getFullYear();
  return (
    getDaysInMonth(month, year) +
    "/" +
    date.getMonth() +
    "/" +
    date.getFullYear()
  );
};

// Bai9

// Bai10
const increaseTime = (timeBegin: string, numberTime: number): string => {
  const arrTimeBegin = timeBegin.split(":");
  const totalSecondBegin =
    parseInt(arrTimeBegin[0]) * 60 * 60 +
    parseInt(arrTimeBegin[1]) * 60 +
    parseInt(arrTimeBegin[2]);
  const totalSecondEnd = totalSecondBegin + numberTime;
  const hour = Math.floor(totalSecondEnd / 3600);
  const minute = Math.floor((totalSecondEnd - hour * 3600) / 60);
  const second = totalSecondEnd - hour * 3600 - minute * 60;
  return hour + ":" + minute + ":" + second;
};
