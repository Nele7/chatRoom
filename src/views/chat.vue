<template>
    <div class="chat">
        <!-- 头部区域 -->
        <div class="chat-head">
            <div class="iconfont chat-ai"  v-html="'&#xe87f;'"></div>
            <div class="chat-title">
                <i class="iconfont title-icon" v-html="'&#xe7ae;'"></i>
                <span>多人聊天室</span>
            </div>
            <div class="iconfont chat-home" v-html="'&#xe7c6;'" @click="$router.push('/')"></div>
        </div>
        <!-- 内容区域 -->
        <div class="chat-content" ref="chatContent">
            <div >
                <div class="chatContent-area" v-for="item in chatContentList">
                    <items :item="item"></items>    
                </div>
            </div>
        </div>
        <!-- 底部区域 -->
        <div class="chat-foot">
            <transition name="slide-left">
                <div v-show="isShowEmoji" class="emoji-display">
                    <ul>
                        <li @click="insertText(item)" v-for="item of emojis">{{item}}</li>
                    </ul>
                </div>
            </transition>

            <div class="iconfont chat-emoji"  v-html="'&#xe783;'" @click="showEmoji(isShowEmoji=!isShowEmoji);" ></div>
            <div class="chat-inp">
                <textarea type="text" spellcheck="false" v-model="textContent" ref="textarea"></textarea>
            </div>
            <div class="chat-send" @click="send">发送</div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import {mapState,mapMutations} from 'vuex'
    import items from './chatItem'
    export default {
        name:'chat',
        data() {
            return {
                emojis: ['😂', '🙏', '😄', '😏', '😇', '😅', '😌', '😘', '😍', '🤓', '😜', '😎', '😊', '😳', '🙄', '😱', '😒', '😔', '😷', '👿', '🤗', '😩', '😤', '😣', '😰', '😴', '😬', '😭', '👻', '👍', '✌️', '👉', '👀', '🐶', '🐷', '😹'],
                isShowEmoji: false,
                chatContentList:[
                    {   
                        date: '2015-11-09 09:57:08', 
                        loc: '江西省南昌市', 
                        from: 'microzz', 
                        avatarUrl: 'https://ss2.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/wisegame/wh%3D68%2C68/sign=ac35a54c65600c33f02cd6ce22606737/63d9f2d3572c11df6ebad97b6d2762d0f703c27b.jpg', 
                        content: 'test', 
                        self: false
                    },
                    {   
                        date: '2015-11-09 09:57:08', 
                        loc: '江西省南昌市', 
                        from: 'microzz', 
                        avatarUrl: 'https://ss2.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/wisegame/wh%3D68%2C68/sign=ac35a54c65600c33f02cd6ce22606737/63d9f2d3572c11df6ebad97b6d2762d0f703c27b.jpg', 
                        content: 'test', 
                        self: false
                    },
                    {   
                        date: '2015-11-09 09:57:08', 
                        loc: '山东省济南市', 
                        from: '故意', 
                        avatarUrl: 'https://ss2.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/wisegame/wh%3D68%2C68/sign=ac35a54c65600c33f02cd6ce22606737/63d9f2d3572c11df6ebad97b6d2762d0f703c27b.jpg', 
                        content: '1.数据放在本地存储，name，add，chatRecord，'+
                                '2. socket.io的学习', 
                        self: true
                    }
                ],
                textContent:'',
            }
        },
        mounted(){
            this.$nextTick(() => {
                this._initScroll();
                let allEle = document.querySelectorAll('.chatContent-area')
                this.chatContentScroll.scrollToElement(allEle[allEle.length-1],0);
            });
        },
        computed:{
            // ...mapState(['chatContentList'])
        },
        methods: {
            // 初始化better-scroll
            _initScroll() {
                this.chatContentScroll = new BScroll(this.$refs.chatContent, {})
            },
            // emoji弹出层
            showEmoji(flag){
                this.isShowEmoji = flag
            },
            // 发送消息
            send(){
                if(!this.textContent){
                    return 
                }
                this.chatContentList.push({   
                    date: '2015-11-09 09:57:08', 
                    loc: '山东省济南市', 
                    from: '问你故意问你故意', 
                    avatarUrl: 'https://ss2.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/wisegame/wh%3D68%2C68/sign=ac35a54c65600c33f02cd6ce22606737/63d9f2d3572c11df6ebad97b6d2762d0f703c27b.jpg', 
                    content: this.textContent, 
                    self: true
                })
                this.textContent =''
                this.isShowEmoji = false
            },
            // 发送表情
            insertText(str){
                this.textContent += str
            }   
        },
        updated(){
            this.$nextTick(() => {
                this._initScroll();
                let allEle = document.querySelectorAll('.chatContent-area')
                this.chatContentScroll.scrollToElement(allEle[allEle.length-1],0);
            });
        },
        components:{
            items
        }
    }
</script>

<style lang="scss" scoped>
.slide-left-enter-active,.slide-left-leave-active {
  transition: all .4s ease-out;
}
// .slide-top-leave-active {
//   transition: all 0 ease;
// }
.slide-left-enter, .slide-left-leave-active {
  transform: translateY(20px);
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
.chat{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .chat-head{
        display: flex;
        flex-direction: row;
        height: 40px;
        text-align: center;
        line-height: 40px;
        padding: 0 10px;
        .chat-ai{
            width: 40px;
            font-size: 22px;
        }
        .chat-title{
            flex: 1;
            font-size: 17px;
            .title-icon{
                font-size: 17px;
                line-height: 17px;
            }
        }
        .chat-home{
            width: 40px;
            font-size: 22px;
        }
    }
    .chat-content{
        flex: 1;
        border-top: 1px solid rgba(138, 138, 138, 0.233);
        border-bottom: 1px solid rgba(138, 138, 138, 0.233);
        background-color: rgba(0, 0, 0, .1);
        overflow: hidden;
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
                }
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
    .chat-foot{
        display: flex;
        flex-direction: row;
        height: 40px;
        line-height: 40px;
        position: relative;
        .emoji-display{
            position: absolute;
            width: 100%;
            height: 140px;
            // background: linear-gradient(to bottom,#223c5f,#383734);
            background: linear-gradient(to bottom,#1b2e36,#383734);
            
            top: -140px;
            left: 0;
            overflow-y: auto;
             ul {
                display: flex;
                flex-wrap: wrap;
                padding: 0 5px;
                li {
                    padding: 2px 3px;
                    font-size: 3rem;
                    list-style: none;
                }
            }
        }
        .chat-emoji{
            width: 40px;
            font-size: 25px;
            color: rgba(233, 233, 233, 0.568);
            text-align: center;
        }
        .chat-inp{
            flex: 1;
            overflow: auto;
            textarea{
                width: 100%;
                border: 0;
                height: 37px;
                background: transparent;
                padding: 10px 3px;
                outline: none;
                color: rgba(233, 233, 233, 0.568);
                font-size: 16px;
                font-weight: 700;
                font-family: monospace;
                resize: none;
                white-space: normal;
            }
        }
        .chat-send{
            width: 60px;
            font-size: 18px;
            color: rgba(233, 233, 233, 0.568);
            text-align: center;
        }
    }
}

</style>