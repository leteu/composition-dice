import { defineComponent, h } from "vue";

export default defineComponent({
  props: {
    faceValue: {
      type: Number,
      validator: val => val >= 1 && val <=6,
      required: true
    }
  },
  setup(props) {
    return () => h('div',
      {
        class: `dice-face dice-face__${props.faceValue}`
      },
      Array.from(
        {
          length: props.faceValue
        },
        (_, index) => index+1
      ).map(dot => {
        return h('div', { class: 'dice-face__dot' }) 
      })
    )
  }
});
