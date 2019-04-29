<template>
    <transition name="slide-fade">
        <!-- 发送人 -->
        <div class="chat-content-item sender" v-if="item.self">
            <div class="chat-msg-date">
                <span>{{item.date}}</span>
            </div>
            <div class="chat-msg-from">
                <span class="chat-msg-author">{{item.from}}</span>
                <span class="chat-loc">[ {{item.loc}} ]</span>
                <img :src="item.avatarUrl" alt="">
            </div>
            <div class="chat-msg-content"><span>{{item.content}}</span></div>
        </div>
        <!-- 其他人 -->
        <div class="chat-content-item receiver" v-if="!item.self">
            <div class="chat-msg-date">
                <span>{{item.date}}</span>
            </div>
            <div class="chat-msg-from">
                <img :src="item.avatarUrl" alt="">
                <span class="chat-loc">[ {{item.loc}} ]</span>
                <span class="chat-msg-author">{{item.from}}</span>
            </div>
            <div class="chat-msg-content"><span>{{item.content}}</span></div>
        </div>
    </transition>
</template>

<script>
    export default {
        props:{
            item:{
                type:Object
            }
        }
    }
</script>

<style lang="scss" scoped>
.chat-content-item{
    padding: 10px;
    width: 100%;
    .chat-msg-date{
        text-align: center;
        margin: 5px 0;
    }
    .chat-msg-from{
        display: flex;
        align-items: center;
        padding: 0 5px;
        img{
            width: 25px;
            height: 25px;
            border-radius: 50%;
        }
    }
    .chat-msg-content{
        span{
            display: inline-block;
            margin: 5px;
            max-width: 50%;
            line-height: 17px;
            letter-spacing: 1px;
        }
    }
}
.sender{
    .chat-msg-from{
        display: flex;
        justify-content: flex-end;
        .chat-loc{
            margin: 0 4px;
        }
    }
    .chat-msg-content{
        display: flex;
        justify-content: flex-end;
    }
}
.receiver{
    .chat-msg-from{
        .chat-loc{
            margin: 0 4px;
        }
    }
}
.slide-fade-enter-active {
    transition: all .3s ease;
}
.slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(15px);
    opacity: 0;
}
</style>