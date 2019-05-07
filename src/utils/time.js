function change(data) {
    return data < 10 ? '0' + data : data
}
export const changeTime = () => {
    let data = new Date()
    let Y = data.getFullYear(),
        M = change(data.getMonth() + 1),
        D = change(data.getDate()),
        h = change(data.getHours()),
        m = change(data.getMinutes()),
        s = change(data.getSeconds());
    return [Y,M,D].join('-') + ' ' + [h,m,s].join(':')
}