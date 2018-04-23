<template>
    <div>
      <h1>Carrinho</h1>

      <ul>
        <li v-for "product in products">
            {{product.title}} - {{product.price}} - {{product.quantity}}
        </li>
      </ul>

    </div>
</template>

<script>
  export default {


  }
</script>

<style scoped>

</style>
