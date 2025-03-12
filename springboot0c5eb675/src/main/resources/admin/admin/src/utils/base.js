const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot0c5eb675/",
            name: "springboot0c5eb675",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot0c5eb675/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "攀枝花市鲜花销售系统"
        } 
    }
}
export default base
