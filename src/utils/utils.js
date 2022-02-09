import dayjs from "dayjs";

export const formatDate = (input) => {
  if (input) {
    return dayjs(input).$d.toString().substring(4, 21);
  }
};

export const formatText = (input) => {
  if (input) {
    return input.slice(0, 1).toUpperCase() + input.slice(1, input.length);
  }
};
