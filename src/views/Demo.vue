<template>
  <div class="demo">
    <h1>This is an demo page</h1>
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert('click')
    },
  },
}
</script>
