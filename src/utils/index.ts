export const calculateExperience = (startDate: string) => {
  const start = new Date(startDate);
  const now = new Date();

  // Calculate the difference in years and months
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  // Adjust the years and months if the current date is before the start date in the year
  if (months < 0 || (months === 0 && now.getDate() < start.getDate())) {
    years--;
    months += 12;
  }

  // Calculate the fractional part of the year based on the month difference
  const fractionOfYear = months / 12;

  const totalExperience = years + fractionOfYear;

  return totalExperience.toFixed(1);
};
