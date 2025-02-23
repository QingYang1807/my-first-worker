/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { HandleBlogRoutes } from './routes/blog/index.js';
import { HandleWorkRoutes } from './routes/work/index.js';

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		const path = url.pathname;

		// 处理博客相关的路由
		if (path.startsWith('/blog/')) {
			return HandleBlogRoutes(request, env, ctx);
		}

		// 处理工作平台相关的路由
		if (path.startsWith('/work/')) {
			return HandleWorkRoutes(request, env, ctx);
		}

		return new Response(JSON.stringify({
			success: false,
			message: '路径不存在'
		}), {
			status: 404,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	},
};
