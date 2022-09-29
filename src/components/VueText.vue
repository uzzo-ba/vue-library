<template>
  <div>
      <h1>{{text}}</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VueText",
  props: {
    text: {
      type: String,
      required: true,
    }
  }
});
</script>