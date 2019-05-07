import io from 'socket.io-client'
export class ChatIM{
    constructor(url){
        this.url = url
        this.socket = null
    }
    init(){
        this.socket = io.connect('ws://'+this.url)
    }
    on(event,callback){
        this.socket.on(event,function(data){
            callback && callback(data)
        })
    }
    emit(event,obj){
        this.socket.emit(event,obj)
    }
}