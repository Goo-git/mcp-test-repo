/**
 * MCP 测试仓库示例代码
 * @author MCP GitHub Tools
 * @date 2025-12-26
 */

function greet(name) {
    return `Hello, ${name}! Welcome to MCP Test Repo! 🎉`;
}

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleString('zh-CN');
}

console.log(greet('MCP User'));
console.log('当前时间:', getCurrentTime());

export { greet, getCurrentTime };