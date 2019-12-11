/**
 * @fileoverview setTimeout 第二个参数禁止是数字
 * @author Cathy
 */
"use strict";
module.exports = {
    meta: {
        docs: {
            description: "setTimeout 第二个参数禁止是数字",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"  修复函数
        schema: [
            // fill in your schema
        ]
    },
    // rule 核心
    /* create 方法 - 监听选择器 
        在深度遍历的过程中，生效的每条规则都会对其中的某一个或多个选择器进行监听，
        每当匹配到选择器，监听该选择器的rule，都会触发对应的回调
    */
    create: function(context) {
        // 公共变量和函数应该在此定义
        return {    
            // 返回事件钩子
            'CallExpression': (node) => {
                debugger
                if (node.callee.name !== 'setTimeout') return // 不是定时器即过滤
                const timeNode = node.arguments && node.arguments[1] // 获取第二个参数
                if (!timeNode) return // 没有第二个参数
                // 检测报错第二个参数是数字 报错
                if (timeNode.type === 'Literal' && typeof timeNode.value === 'number') {
                    // 这段代码用来通知ESLint这段代码是警告或错误的。
                    context.report({
                        node,
                        message: 'setTimeout第二个参数禁止是数字'
                    })
                }
            }
        };
    }
};
