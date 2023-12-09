export const formatCurrency = (value) =>
  new Intl.NumberFormat("eu", { style: "currency", currency: "EUR" }).format(
    value,
  );

export const formatSecondsToHrsMin = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  const formattedTime = `${hours} hrs ${minutes} min`;
  return formattedTime;
};
