import moment from "moment/min/moment-with-locales";

export const formatShortDate = (date) => {
  return date.toString().length === 13
    ? moment(date).format("DD MMM YYYY")
    : moment(date * 1000).format("DD MMM YYYY");
};

export const formatLongDate = (date) => {
  return date.toString().length === 13
    ? moment(date).format("DD MMMM YYYY")
    : moment(date * 1000).format("DD MMMM YYYY");
};

export const formatCommonDate = (date) => {
  return moment(date).format("DD MMMM YYYY");
};

export const formatDateTime = (dateTime) => {
  return moment(dateTime).format("DD MMM YYYY");
};

/**
 *
 * @param {*} number
 * @returns format price with rupiah currency
 */

export const formatPriceRupiah = (number) => {
  return `Rp ${new Intl.NumberFormat("ID").format(number)}`;
};

/**
 *
 * @param {*} e for value
 */

export const maxLengthCheck = (e) => {
  if (e.target.value.length > e.target.maxLength) {
    e.target.value = e.target.value.slice(0, e.target.maxLength);
  }
};

/**
 *
 * @param {*} e for value there are blocker from inputed
 */

export const removeHTMLTag = (e) => {
  if (e.key === "<" || e.key === ">") {
    e.preventDefault();
  }
};

/**
 * Truncate title and description
 * @param {*} string = characters
 * @param {*} n = limited number of characters
 * @returns
 */

export const truncate = (string, n) => {
  return string?.length > n ? string.substr(0, n - 1) + "..." : string;
};
