function bind(Fn, obj, ...args) {
  // 返回个新函数
  return function (...args2) {
    // 执行 call 函数
    return call(Fn, obj, ...args, ...args2)
  }
}
