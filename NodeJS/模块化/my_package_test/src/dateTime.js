function dateTime(time) {
    const date = new Date(time)

    let y = date.getFullYear()
    let m = padZero(date.getMonth() + 1)
    let d = padZero(date.getDate())
    let hh = padZero(date.getHours())
    let mm = padZero(date.getMinutes())
    let ss = padZero(date.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

function padZero(val) {
    return val > 9 ? val : '0' + val
}

module.exports = {
    dateTime
}