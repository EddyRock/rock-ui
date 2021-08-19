<script>
export default {
  name: 'EventsMixin',
  components: {},
  props: {
    subtitle: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: '',
    },
    warning: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    field: '',
  }),

  methods: {
    onInput() {
      this.$emit('input', this.field);
    },

    onChange() {
      this.$emit('change', this.field);
    },
  },

  created() {
    this.field = this.value || '';
  },
};
</script>
