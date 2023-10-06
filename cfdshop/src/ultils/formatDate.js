import moment from "moment";
import { DATE_FORMAT } from "../config/format";

export const formatDate = (date, format = DATE_FORMAT) => {
  if (!date) return "";
  return moment(date).format(format);
};
