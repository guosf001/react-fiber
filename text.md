requestIdleCallback
利用浏览器空余时间执行任务，如果有更高优先级的任务要执行时，当前任务可以被终止，优先执行更高级任务
requestIdleCallback(function(deadline){
    //deadline.timeRemining  获取浏览器空余时间
})

react  16之前的版本比对更新vdom的过程采用的是循环递归实现的，这种比对会有一个问题，一旦任务开始执行就无法中断，如果应用中组件数量庞大，主线程被长期占用，直到整棵vdom对比更新完成之后才能被释放，主线程才能执行其他任务，这会导致一些用户交互，动画任务无法立即执行，页面产生卡顿，非常影响用户体验

解决方案
利用浏览器空闲时间执行任务，拒绝长时间占用主线程
放弃递归只采用循环，因为循环可以被中断
任务拆分，将任务拆分为一个个小任务

实现思路
1、构建Fiber 可中断
2、提交Commit 不可中断
Dom初始渲染 vdom -> Fiber -> Fiber[] ->Dom
Dom更新操作 newFiber vs oldFiber -> Fiber[] -> Dom