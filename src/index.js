import { handleUpdate } from './bot.js';
import { CLOUDFLARE_WORKER_LIMITS } from './config.js';

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const startTime = Date.now();
    const update = await request.json();

    await handleUpdate(update);

    const executionTime = Date.now() - startTime;
    if (executionTime > CLOUDFLARE_WORKER_LIMITS.executionTimeMs) {
      console.warn("Execution time exceeded Cloudflare Workers limits!");
    }

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("Error processing update:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
