import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    initialValue: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { counter, squareCounter } = useCounter(props.initialValue);

    return {
      counter,
      squareCounter,
    };
  },
});
