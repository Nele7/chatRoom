<template>
    <header>
        <div class="bg">
        </div>
        <nav class="nav_bar">
            <div class="nav-item" v-for="(item,index) in routerData" :key="index">
                <router-link :to="item.link">{{item.name}}</router-link>
            </div>
        </nav>
        <div class="title">
            <transition name="fade">
                <h1>主页</h1>
            </transition>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                routerData: [
                    {link:'/home',name:'主页'},
                    {link:'/tags',name:'标签'},
                    {link:'/about',name:'关于'}
                ]
            }
        },
    }
</script>

<style scoped lang="scss">
header{
    display: flex;
    flex-direction: column;
    height: 30rem;
    .bg{
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        width: 100%;
        height: 30rem;
        background: url('../../assets/img/img3.jpg') no-repeat center /cover
    }
    .nav_bar{
        width: 100%;
        height: 4rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding: 0 3rem;
        .nav-item{
            font-size: 1.6rem;
            a{
                display: inline-block;
                padding: 1.2rem 1.8rem;
                transition: opacity 0.3s;
                color:#fff;
                &:hover{
                    opacity: 0.5;
                }
            }
        }
    }
    .title{
        margin: auto;
        h1{
            color:#fff;
            font-weight: 400;
            font-size: 4rem;
        }
    }
}
@media screen and (max-width: 768px){
    header{
        height: 24rem;
        .bg{
            height: 24rem;
        }
        .title
            h1{
                font-size: 3rem;
            }
    }
    
}
@media screen and (max-width: 480px){
    header{
        height: 21rem;
        .bg{
            height: 21rem;
        }
        .nav_bar{
            justify-content: center;
            .nav-item{
                a{
                    font-size: 1.6rem;
                }
            }
        }
    }
}
</style>