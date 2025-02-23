import { HandleUserPostRoutes } from './post/post.js';
// import { HandleUserListRoutes } from './list/list.js';

export async function HandleUserRoutes(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // 处理用户相关的请求
    // 例如：创建用户、读取用户列表等
    // 这里可以添加具体的逻辑

    // 创建用户
    if (path.startsWith('/blog/api/v1/users/post')) {
        return HandleUserPostRoutes(request, env, ctx);
    }

    // // 读取用户列表
    // if (path.startsWith('/blog/api/v1/users/list')) {
    //     return HandleUserListRoutes(request, env, ctx);
    // }
    

    return new Response(JSON.stringify({
        success: false,
        message: '用户模块功能开发中'
    }), {
        status: 404,
        headers: {
            'Content-Type': 'application/json'
        }
    });
} 