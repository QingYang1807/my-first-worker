export async function HandleWorkRoutes(request, env, ctx) {
    return new Response(JSON.stringify({
        success: false,
        message: '工作平台功能开发中'
    }), {
        status: 404,
        headers: {
            'Content-Type': 'application/json'
        }
    });
} 