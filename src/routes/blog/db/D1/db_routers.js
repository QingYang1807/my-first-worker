export async function HandleDBRoutes(request, env, ctx) {
  try {
    const { pathname } = new URL(request.url);
    
    // 用户列表接口
    if (pathname.endsWith("/users")) {
      const { results } = await env.DB1.prepare(
        "SELECT * FROM users"
      ).all();
      console.log(results);
      
      return Response.json({
        code: 200,
        data: results,
        message: "获取用户列表成功"
      });
    }
    console.log(pathname);
    
    // 添加用户接口
    if (pathname.endsWith("/users/add") && request.method === "POST") {
      const { username, email, password } = await request.json();
      console.log(username, email, password);
      
      const avatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`;
      const result = await env.DB1.prepare(
        "INSERT INTO users (username, email, password_hash, avatar) VALUES (?, ?, ?, ?)"
      )
      .bind(username, email, password, avatar)
      .run();

      return Response.json({
        code: 200,
        data: result,
        message: "添加用户成功"
      });
    }

    // 查询单个用户接口
    if (pathname.startsWith("/users/") && request.method === "GET") {
      const userId = pathname.split("/")[2];
      
      const { results } = await env.DB.prepare(
        "SELECT * FROM users WHERE id = ?"
      )
      .bind(userId)
      .all();

      return Response.json({
        code: 200,
        data: results[0] || null,
        message: results[0] ? "获取用户成功" : "用户不存在"
      });
    }

    return Response.json({
      code: 404,
      message: "接口不存在，可用接口：GET /users, POST /users/add, GET /users/:id"
    });

  } catch (error) {
    return Response.json({
      code: 500,
      message: error.message || "服务器内部错误"
    });
  }
}
