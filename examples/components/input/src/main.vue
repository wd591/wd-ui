<template>
  <div
    class="el-input"
    :class="[{
      'is-disabled': disabled,
      'el-input--suffix': clearable || showPassword
      }]">
    <input
        class="el-input__inner"
        :placeholder="placeholder"
        :type="showPassword?(passwordVisible?'text':'password'):type"
        :name="name"
        :disabled="disabled"
        :value="value"
        @input="handleInput"
      >
      <span
        class="el-input__suffix"
        v-if="clearable || showPassword"
      >
        <span class="el-input__suffix-inner">
          <i v-if="clearable && value"
            class="el-input__icon el-icon-circle-close el-input__clear"
            @mousedown.prevent
            @click="clear"
          ></i>
          <i v-if="showPassword"
            class="el-input__icon el-icon-view el-input__clear"
            :class="{'el-icon-view-active':passwordVisible}"
            @click="handlePasswordVisible"
          ></i>
        </span>
      </span>
  </div>
</template>

<script>
export default {
  name: 'WdInput',
  data () {
    return {
      passwordVisible: false
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: [String, Number],
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }

  },
  components: {},
  created () {},
  mounted () {},
  computed: {},
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePasswordVisible () {
      this.passwordVisible = !this.passwordVisible
    }
  },
  watch: {},
  filters: {}
}
</script>
<style lang="scss" scoped>
  ::v-deep .el-icon-view-active{
    color: blue;
  }
</style>
