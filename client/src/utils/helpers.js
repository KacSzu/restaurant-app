export const formatCurrency = (value) =>
  new Intl.NumberFormat("eu", { style: "currency", currency: "EUR" }).format(
    value,
  );
