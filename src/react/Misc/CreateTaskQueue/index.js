export default () => {
    const taskQueue = []
    return {
        /**
         * 项任务队列添加任务
         */
        push: item => taskQueue.push(item),
        /**
         * 从任务队列中获取任务
         */
        pop: () => taskQueue.shift(),
        /**
         * 判度任务队列是否还有任务
         */
        isEmpty: () => taskQueue.length === 0
    }
}