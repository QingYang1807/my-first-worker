import { HandleUserRoutes } from './system/user/index.js';
// import { HandleArticleRoutes } from './cms/article/index.js';
// import { HandleCategoryRoutes } from './cms/category/index.js';
// import { HandleTagRoutes } from './cms/tag/index.js';
import { HandleDBRoutes } from './db/D1/db_routers.js';

export async function HandleBlogRoutes(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // 数据库模块
    if (path.startsWith('/blog/api/v1/db/')) {
        return HandleDBRoutes(request, env, ctx);
    }
    
    // 用户模块
    if (path.startsWith('/blog/api/v1/users/')) {
        return HandleUserRoutes(request, env, ctx);
    }

    // 文章模块
    // if (path.startsWith('/blog/api/v1/articles/')) {
    //     return HandleArticleRoutes(request, env, ctx);
    // }

    // 分类模块
    // if (path.startsWith('/blog/api/v1/categories/')) {
    //     return HandleCategoryRoutes(request, env, ctx);
    // }

    // 标签模块
    // if (path.startsWith('/blog/api/v1/tags/')) {
    //     return HandleTagRoutes(request, env, ctx);
    // }

    return new Response(JSON.stringify({
        success: false,
        message: '博客路径不存在'
    }), {
        status: 404,
        headers: {
            'Content-Type': 'application/json'
        }
    });
} 