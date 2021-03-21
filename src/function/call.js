function call(Fn, obj, ...args) {
  if (obj === undefined || obj === null) {
    obj = globalThis // 全局对象
  }
  // 为 obj 添加临时方法
  obj.temp = Fn
  // 调用 temp 方法
  let result = obj.temp(...args)
  delete obj.temp
  return result
}
