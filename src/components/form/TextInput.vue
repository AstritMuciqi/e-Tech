<template>
  <input
    class="form-control"
    type="text"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    value: String,
  },
};
</script>
