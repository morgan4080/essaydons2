<template>
  <button :disabled="loading" :type="type0" class="flex items-center">
    <div v-if="loading" :class="class0" />
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    loading: Boolean,
    class0: {
      type: String,
      default() {
        return "btn-spinner mr-2"
      },
    },
    type0: {
      type: String,
      default() {
        return "submit";
      }
    }
  },
}
</script>
