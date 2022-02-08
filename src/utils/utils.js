import dayjs from "dayjs";

export const formatDate = (input) => {
  if (input) {
    return dayjs(input).$d.toString().substring(4, 21);
  }
};
