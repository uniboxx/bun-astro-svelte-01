<script>
  let count = $state(0);
</script>

<div>
  <button
    class="p-2 border-dotted text-amber-50 bg-amber-600 btn border-1 border-amber-500"
    onclick={() => count--}>-</button
  >
  <span>Counter: {count}</span>
  <button
    class="p-2 border-dotted text-amber-50 bg-amber-600 border-1 border-amber-500"
    onclick={() => count++}>+</button
  >
</div>

<style>
  .btn {
    padding: 5px 10px;
  }
</style>
