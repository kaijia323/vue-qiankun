<template>
  <div class="index-wrap">
    <el-button type="primary" @click="handleClick">点击前往子应用</el-button>
  </div>

</template>

<script>
/**
   * index create by 油麦菜
   * createTime 2021/1/4 16:19
   */
export default {
  name: 'index',
  components: {},
  filters: {},
  mixins: [],
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () {
  },
  methods: {
    handleClick () {
      this.$router.push({
        path: '/hashMicro'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .index-wrap {

  }
</style>
