<template>
  <div class="login">
    <div class="input-wrap">
        <input type="text" v-model="username"/>
        <span v-if="error.name" class="err-msg">{{error.name}}</span>
    </div>
    <div class="input-wrap">
        <input type="password" v-model="passwd"/>
        <span v-if="error.pwd" class="err-msg">{{error.pwd}}</span>
    </div>
    <div class="input-wrap">
        <button @click="login">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: null,
      username: "",
      passwd: "",
      error: {
        name: "",
        pwd: ""
      }
    }
  },

  methods: {
    check (username, passwd) {
      if (!username) {
        this.error.name = '请输入用户名'
        return false
      }
      if (!passwd) {
        this.error.pwd = '请输入密码'
        return false
      }
      return true
    },
    async login() {
      const {username, passwd, $router} = this
      if (!this.check(username, passwd)) return

      const response = await this.$axios
        .post('http://raindy.jios.org:3664/user/checkPassword', {
          username: this.username,
          passwd: this.passwd
        }, {headers: {'Content-Type': 'application/json'}})
        .then(response => (response))
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
      console.log(response.data)
      if (response.data === true) {
        alert('登陆成功！')
      } else {
        alert('用户名错误')
      }

      // var formData = JSON.stringify(this.username,this.passwd);
      // console.log(this.username)
      // console.log(this.passwd)
      // this.$http.post("http:/raindy.jios.org:3664/user/checkPassword",formData).then(function(data){
      //   if(data.json().state=="true") {
      //     console.log("success");
      //   }
      //     }).catch(function(){
      //   console.log("服务器异常！");
      // });

      // if (name === 'admin' && pwd === '123') {
      //   debugger
      //   console.log(name)
      //   $router.push({ name: 'main' })
      // } else {
      //   alert('用户名错误')
      // }
    }
  }
}
</script>

<style>
.login {
    width: 300px; margin: 10% auto;
}
</style>
