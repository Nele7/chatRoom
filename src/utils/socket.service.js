const debug = process.env.NODE_ENV !== 'production'
import io from 'socket.io-client'
let newuser = [],
    newmessage = [],
    ring = []
newuser['mp3'] = '/images/common/inline.mp3'
newmessage['mp3'] = '/images/common/message.mp3'

// ring['mp3'] = '/images/ring.mp3';


export class Eim {
    constructor(url) {
        this.url = url;
        this.socket = null
    }

    init(clientid) {
        this.socket = io.connect('ws://' + this.url + '?clientid=' + clientid)
    }

    on(event, callback) {
        this.socket.on(event, function (data) {
            callback && callback(data)
        })
    }

    sendMessage(obj) {
        //console.log(obj);
        this.sendTypeMessage('messageevent', obj)
    }

    sendTypeMessage(event, obj) {
        this.socket.emit(event, obj)
    }

    close(val) {
        this.socket.close(val)
    }

    remove(event) {
        return this.socket.removeListener(event)
    }

    ping() {
        // loadURL("/message/ping.html");
        // console.log("ping:" + new Date().getTime());
    }

    palyUserInLine() {
        this.audioplayer('audioplayer', newuser, false)
    }

    palyMessage() {
        this.audioplayer('audioplayer', newmessage, false)
    }

    audioplayer(id, file, loop) {
        let audioplayer = document.getElementById(id)
        if (audioplayer != null) {
            document.body.removeChild(audioplayer)
        }

        if (typeof (file) != 'undefined') {
            if (navigator.userAgent.indexOf('MSIE') > 0) { // IE
                let player = document.createElement('bgsound')
                player.id = id
                player.src = file['mp3']
                player.setAttribute('autostart', 'true')
                if (loop) {
                    player.setAttribute('loop', 'infinite')
                }
                document.body.appendChild(player)

            } else { // Other FF Chome Safari Opera
                let player = document.createElement('audio')
                player.id = id
                player.setAttribute('autoplay', 'autoplay')
                if (loop) {
                    player.setAttribute('loop', 'loop')
                }
                document.body.appendChild(player)

                let mp3 = document.createElement('source')
                mp3.src = file['mp3']
                mp3.type = 'audio/mpeg'
                player.appendChild(mp3)
            }
        }
    }

}