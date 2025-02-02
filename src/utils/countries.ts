export const fetchCountries = async (order: string, type: string) => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  if (!res.ok) return;
  const countries = await res.json();
  switch (order) {
    case 'population':
      switch (type) {
        case 'asc':
          return countries.sort(
            (a: any, b: any) => a.population - b.population
          );
        case 'desc':
          return countries.sort(
            (a: any, b: any) => b.population - a.population
          );
        default:
          return countries.sort(
            (a: any, b: any) => b.population - a.population
          );
      }
    case 'name':
      switch (type) {
        case 'desc':
          return countries.sort((a: any, b: any) =>
            b.name.common.localeCompare(a.name.common)
          );
        case 'asc':
          return countries.sort((a: any, b: any) =>
            a.name.common.localeCompare(b.name.common)
          );
        default:
          return countries;
      }
    default:
      return countries;
  }
};
