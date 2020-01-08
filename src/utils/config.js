const config = {
    baseUrl: 'https://sat.fengyuchao.com', // api访问路径
    // 其他配置变量等等
    //
};
const { NODE_ENV } = process.env;
if(NODE_ENV === 'uat') {
    config.baseUrl = 'https://uat.fengyuchao.com';
} else if(NODE_ENV == 'pre') {
    config.baseUrl = 'https://pre.fengyuchao.com';
} else if (NODE_ENV === 'prd') {
    config.baseUrl = 'https://prd.fengyuchao.com'
}

export default config;