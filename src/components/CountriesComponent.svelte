<script lang="ts">
  import { fetchCountries } from 'src/utils/countries';
  let rotated = $state(false);
  let order = $state('');
  let type = $state('');
  function orderBy(column: string) {
    if (order === column) {
      rotated = !rotated;
    } else {
      rotated = false;
      type = '';
    }
    order = column;
    type = type === 'asc' ? 'desc' : 'asc';
  }
</script>

{#await fetchCountries(order, type)}
  <p>Loading countries...</p>
{:then countries}
  <h1>Number of Countries: {countries.length}</h1>
  <table>
    <thead>
      <tr>
        <th>Index</th>
        <th
          >Name <button
            class={{ rotated: rotated && order === 'name' }}
            id="population"
            onclick={() => orderBy('name')}
          >
            {#if order === 'name'}
              &#9650;
            {:else}
              &#9651;
            {/if}
          </button></th
        >
        <th>Capital</th>
        <th
          >Population <button
            class={{ rotated: rotated && order === 'population' }}
            id="population"
            onclick={() => orderBy('population')}
          >
            {#if order === 'population'}
              &#9650;
            {:else}
              &#9651;
            {/if}
          </button></th
        >
      </tr>
    </thead>
    <tbody>
      {#each countries as country, index (index)}
        <tr>
          <td>{(index + 1).toString().padStart(3, '0')}</td>
          <td>{country.name.common}</td>
          <td>{country.capital ? country.capital[0] : ''}</td>
          <td>{country.population}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{:catch error}
  <p>Error occurred in fetching data: {error.message}</p>
{/await}

<style>
  table {
    border: 2px solid gray;
    border-collapse: collapse;
    th {
      border: 2px solid gray;
      padding: 5px 10px;
    }
    #population {
      cursor: pointer;
      display: inline-block;
      background-color: transparent;
      border: none;
      &.rotated {
        transform-origin: center;
        transform: rotateX(180deg);
      }
    }
  }
  tbody {
    tr {
      &:nth-child(even) {
        background-color: lightgray;
      }
      td {
        border: 1px solid gray;
        padding: 5px 10px;
      }
      td:nth-child(2) {
        max-width: 15rem;
        word-wrap: wrap;
      }
    }
  }
</style>
