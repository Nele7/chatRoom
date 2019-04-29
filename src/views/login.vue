<template>
<transition name="slide-top">
    <div class="login">
        <i class="iconfont" v-html="'&#xe87e;'"></i>
        <p>简单聊天室</p>
        <input type="text" class="inp" placeholder="Please enter your name" autofocus @keyup.enter="login" v-model.trim="name" >
        <button type="button" class="btn" @click="login">确定</button>
    </div>
</transition>
</template>

<script>
    export default {
        name:'login',
        data() {
            return {
                name: ''
            }
        },
        methods: {
            login() {
                if(this.name == ''){
                    return false
                }
                this.$router.push('./chat')
            }
        },
    }
</script>

<style lang="scss" scoped>
.login{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background-image: linear-gradient(to bottom, #1b2e36,#908d82 100%);
    font-size: 30px;
    .iconfont{
        font-size: 60px;
    }
    .inp{
        background: transparent;
        border:0;
        border-bottom: 1px solid #999;
        outline: none;
        color:#999;
        padding: 6px 0;
        margin: 0 0 30px 0;
        font-size: 17px;
        text-align: center;
    }
    .btn{
        background: transparent;
        border: 1px solid #999;
        color:#999;
        padding: 10px 20px;
        outline: none;
    }
}
.slide-top-enter-active,.slide-top-leave-active {
  transition: all .5s ease-out;
}
// .slide-top-leave-active {
//   transition: all 0 ease;
// }
.slide-top-enter, .slide-top-leave-active {
  transform: translateY(-250px);
  opacity: 0;
}
</style>