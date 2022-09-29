<template>
  <div>
    <input
      :type="type"
      class="form-control rounded-0 h-100"
      :class="(errorText && 'border-danger') || textColor"
      :name="name"
      v-model="text"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="onInputChange"
    />
    <div class="text-danger" v-if="errorText">
      {{ $t(errorText) }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from "vue";

export default defineComponent({
  name: "VueInput",
  props: {
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    errorText: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
    textColor: {
      type: String,
    },
  },
  emits: ["on-change-input"],
  setup(props, context) {
    const text = ref("");

    onMounted(() => {
      if (props.value) {
        (text.value as string) = props.value;
      }
    });

    watch(
      () => props.value as string,
      (value) => {
        (text.value as string) = value;
      }
    );

    const onInputChange = () => {
      context.emit("on-change-input", props.name, text.value);
    };

    return {
      text,
      onInputChange,
    };
  },
});
</script>