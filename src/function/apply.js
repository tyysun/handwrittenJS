function apply(Fn, obj, args) {
  // 判断
  if (obj === undefined || obj === null) {
    obj = globalThis
  }
  // 为 obj 添加临时方法
  obj.temp = Fn
  let result = obj.temp(...args)
  delete obj.temp
  return result
}
