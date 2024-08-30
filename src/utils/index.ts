export const calculateExperience = (startDate: string) => {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();

  if (
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate())
  ) {
    years--;
  }

  const months = (now.getMonth() - start.getMonth() + 12) % 12;
  const fractionOfYear = months / 12;

  const totalExperience = years + fractionOfYear;

  return totalExperience.toFixed(1);
};
