<script>
  let count = $state(0);
</script>

<div>
  <button onclick={()=>count--} class="btn">-</button>
  <span>Counter: {count}</span>
  <button onclick={()=>count++} class="btn">+</button>
</div>

<style>
  .btn{
    padding: 5px 10px;
  }
</style>