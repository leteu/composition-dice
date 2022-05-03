import { defineComponent, h } from "vue";
import DiceFace from "./DiceFace";

export default defineComponent({
  props: {
    value: {
      type: Number,
      validator: (val) => val >= 1 && val <= 6,
      required: true
    },

    roll: {
      type: Boolean,
      default: false
    },
  },
  setup(props) {
    return () =>
      h(
        "div",
        {
          class: `dice dice__show-${props.value} ${props.roll ? 'roll-dice' : ''}`
        },
        [
          h(DiceFace, { faceValue: 1 }),
          h(DiceFace, { faceValue: 2 }),
          h(DiceFace, { faceValue: 3 }),
          h(DiceFace, { faceValue: 4 }),
          h(DiceFace, { faceValue: 5 }),
          h(DiceFace, { faceValue: 6 })
        ]
      );
  }
});
