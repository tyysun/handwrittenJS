function debounde(callback, time) {
  let timeId = null
  return function (e) {
    // 启动定时器
    if (timeId !== null) {
      // 清空定时器
      clearTimeout(timeId)
    }
    timeId = setTimeout(() => {
      callback.call(this, e)
      timeId = null
    }, time)
  }
}
