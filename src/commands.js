export const commands = {
  start: async (chatId, sendResponse) => {
    const message = "🚀 Welcome! I'm your Cloudflare-powered Telegram bot!";
    await sendResponse(chatId, message);
  },
  
  help: async (chatId, sendResponse) => {
    const helpText = `
    🤖 *Bot Commands*:
    /start - Start the bot
    /help - Get this help message
    /info - Learn about Cloudflare Workers
    `;
    await sendResponse(chatId, helpText);
  },
  
  info: async (chatId, sendResponse) => {
    const infoText = `
    🌐 *Cloudflare Workers*:
    - Serverless functions running at Cloudflare's edge locations.
    - Fast, global, and highly scalable.
    `;
    await sendResponse(chatId, infoText);
  },

  unknown: async (chatId, sendResponse) => {
    const errorText = "❌ Unknown command! Send /help for a list of commands.";
    await sendResponse(chatId, errorText);
  },
};
