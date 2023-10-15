export const formatCurrency = (data, type = "vi-VN") => {
  if (!data || isNaN(data)) return 0;
  return data.toLocaleString(type);
};
