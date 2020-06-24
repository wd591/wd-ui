<template>
  <div id="app">
    <div class="row">
      <wd-button @click="fn">默认按钮</wd-button>
      <wd-button type="primary">主要按钮</wd-button>
      <wd-button type="success">成功按钮</wd-button>
      <wd-button type="info">信息按钮</wd-button>
      <wd-button type="warning">警告按钮</wd-button>
      <wd-button type="danger">危险按钮</wd-button>
    </div>

    <div class="row">
      <wd-button plain>朴素按钮</wd-button>
      <wd-button type="primary" plain>主要按钮</wd-button>
      <wd-button type="success" plain>成功按钮</wd-button>
      <wd-button type="info" plain>信息按钮</wd-button>
      <wd-button type="warning" plain>警告按钮</wd-button>
      <wd-button type="danger" plain>危险按钮</wd-button>
    </div>

    <div class="row">
      <wd-button round>圆角按钮</wd-button>
      <wd-button type="primary" round>主要按钮</wd-button>
      <wd-button type="success" round>成功按钮</wd-button>
      <wd-button type="info" round>信息按钮</wd-button>
      <wd-button type="warning" round>警告按钮</wd-button>
      <wd-button type="danger" round>危险按钮</wd-button>
    </div>

    <div class="row">
      <wd-button icon="el-icon-search" circle></wd-button>
      <wd-button type="primary" icon="el-icon-edit" circle></wd-button>
      <wd-button type="success" icon="el-icon-check" circle></wd-button>
      <wd-button type="info" icon="el-icon-message" circle></wd-button>
      <wd-button type="warning" icon="el-icon-star-off" circle></wd-button>
      <wd-button type="danger" icon="el-icon-delete" circle></wd-button>
    </div>

    <div class="row">
      <wd-button icon="el-icon-edit">默认按钮</wd-button>
      <wd-button type="primary" icon="el-icon-edit">主要按钮</wd-button>
      <wd-button type="success" icon="el-icon-edit">成功按钮</wd-button>
      <wd-button type="info" icon="el-icon-edit">信息按钮</wd-button>
      <wd-button type="warning" icon="el-icon-edit">警告按钮</wd-button>
      <wd-button type="danger" icon="el-icon-edit" disabled>危险按钮</wd-button>
    </div>

    <wd-dialog title="温馨提示" width="80%" :visible.sync="visible">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <wd-button @click="visible=false">提交</wd-button>
        <wd-button @click="visible=false">取消</wd-button>
      </template>
    </wd-dialog>
    <!-- <wd-dialog>
      <template v-slot:title>
        <h3>我是标题</h3>
      </template>
    </wd-dialog> -->

    <wd-input type="text" placeholder="请输入" v-model="inputVal" clearable></wd-input>
    <wd-input type="password" placeholder="请输入" v-model="inputVal1" showPassword></wd-input>
    <wd-input type="password" placeholder="请输入" v-model="inputVal2"></wd-input>
    {{inputVal}}
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      visible: false,
      inputVal: 111,
      inputVal1: 111,
      inputVal2: 111

    }
  },
  components: {
  },
  methods: {
    fn () {
      this.visible = !this.visible
      console.log(111)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.row {
  margin-bottom: 20px;
}
</style>
