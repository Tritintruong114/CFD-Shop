/* eslint-disable no-useless-escape */
/* eslint-disable no-extra-boolean-cast */
const REGREX = {
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
};

const validate = (rules, form) => {
  let errObj = {};

  for (const key in rules) {
    for (const rule of rules[key]) {
      // Case : Function
      if (typeof rule === "function") {
        const message = rule(form[key], form);
        console.log("message", message);
        if (!!message) {
          errObj[key] = message || "Dữ liệu nhập sai yêu cầu";
          break;
        }
      }
      //   Case: Required
      if (rule.required) {
        // check required
        if (!!!form[key]) {
          //Nếu key đó trong form trống thì báo lỗi.
          errObj[key] = rule.message || "Vui lòng nhập";
          break;
        }
      }
      //   Case: Regrex
      if (rule.regrex && form[key]) {
        let pattern = "";

        if (rule.regrex in REGREX) {
          pattern = REGREX[rule.regrex];
        } else if (rule.regrex instanceof RegExp) {
          pattern = rule.regrex;
        } else {
          pattern = new RegExp(rule.regrex, "gi");
        }
        // check regrex
        if (!pattern.test(form[key])) {
          errObj[key] = rule.message || "Vui lòng nhập đúng định dạng";
          break;
        }
      }
    }
  }
  return errObj;
};

export const requireRule = (message) => {
  return {
    required: true,
    message,
  };
};

export const regrexRule = (regrex, message) => {
  return {
    regrex,
    message,
  };
};

export default validate;
