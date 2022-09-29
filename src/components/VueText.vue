<template>
  <div>
      <h1>{{string}}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VueText",
  props: {
    string: {
      type: String,
      required: true,
    }
  }
});
</script>