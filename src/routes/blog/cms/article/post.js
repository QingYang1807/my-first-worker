export async function HandlePostRoutes(request, env, ctx) {
    if (request.method === 'GET') {
        try {
            const body = await request.json();
            return new Response(JSON.stringify({
                success: true,
                data: body,
                message: '请求成功'
            }), {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
        } catch (error) {
            return new Response(JSON.stringify({
                success: false,
                message: '请求失败',
                error: error.message,
                status: 400
            }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    }

    return new Response(JSON.stringify({
        success: false,
        message: '仅支持 POST 方法'
    }), {
        status: 405,
        headers: {
            'Content-Type': 'application/json'
        }
    });
} 