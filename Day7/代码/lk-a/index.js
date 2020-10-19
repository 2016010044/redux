const todos = [
    {id: 1, title: "学习2个小时的react课程", finished: false},
    {id: 2, title: "学习1个小时的webpack课程", finished: false},
    {id: 3, title: "学习1个小时的node课程", finished: false},
    {id: 4, title: "刷2小时的抖音", finished: false}
];
console.log(JSON.stringify(todos));
console.log("-------------------")
console.log(JSON.parse(JSON.stringify(todos)));