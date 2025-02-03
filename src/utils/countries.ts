interface Country {
  data: {
    id: string;
    name: { common: string };
    capital: string;
    population: number;
  };
}

export function orderCountries(
  collection: Country[],
  order: string,
  type: string
) {
  // const countries = JSON.parse(JSON.stringify(collection));
  const countries = [...collection];
  switch (order) {
    case 'population':
      switch (type) {
        case 'asc':
          return countries.sort(
            (a: Country, b: Country) => a.data.population - b.data.population
          );
        case 'desc':
          return countries.sort(
            (a: Country, b: Country) => b.data.population - a.data.population
          );
        default:
          return countries.sort(
            (a: Country, b: Country) => b.data.population - a.data.population
          );
      }
    case 'name':
      switch (type) {
        case 'desc':
          return countries.sort((a: Country, b: Country) =>
            b.data.name.common.localeCompare(a.data.name.common)
          );
        case 'asc':
          return countries.sort((a: Country, b: Country) =>
            a.data.name.common.localeCompare(b.data.name.common)
          );
        default:
          return countries;
      }
    default:
      return countries;
  }
}
