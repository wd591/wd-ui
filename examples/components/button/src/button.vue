<template>
  <button
    class="el-button"
    :disabled="disabled"
    :class="[
      type?`el-button--${type}`:'',
      {
        'is-plain' :plain,
        'is-round':round,
        'is-circle': circle,
        'is-disabled': disabled
      }
     ]"
     @click="handleClick"
    >
    <i :class="icon" v-if="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'WdButton',
  data () {
    return {
    }
  },
  components: {},
  // 封装一个公用的组件，会对一个prop校验
  props: {
    type: {
      // 数据类型 字符串
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: Boolean
  },
  created () {},
  mounted () {},
  computed: {},
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  },
  watch: {},
  filters: {}
}
</script>
<style lang="scss" scoped>
</style>
