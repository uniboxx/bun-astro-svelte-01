<script lang="ts">
  import { orderCountries } from 'src/utils/countries';
  let rotated = $state(false);
  let order = $state('');
  let type = $state('');
  let { countries } = $props();

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
  const thStyles = 'px-4 py-2 border-2 border-solid border-gray-500';
  const tdStyles = 'px-4 py-2 border-gray-400 border-solid border-1';
  const orderedCountries = $derived.by(() =>
    orderCountries(countries, order, type)
  );
</script>

<h1 class="pl-2 my-2 text-3xl text-center">
  Number of Countries: {countries.length}
</h1>
<div class="overflow-x-scroll">
  <table
    class="w-full m-auto border-2 border-collapse border-gray-500 border-solid max-w-max"
  >
    <thead>
      <tr>
        <th class={thStyles}>Index</th>
        <th class={thStyles}
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
        <th class={thStyles}>Capital</th>
        <th class={thStyles}
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
      {#each orderedCountries as country, index (index)}
        <tr class="even:bg-gray-300">
          <td class={tdStyles}>{(index + 1).toString().padStart(3, '0')}</td>
          <td class={['max-w-60', tdStyles]}>{country.data.name.common}</td>
          <td class={tdStyles}
            >{country.data.capital ? country.data.capital[0] : ''}</td
          >
          <td class={tdStyles}>{country.data.population}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  table {
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
</style>
