export const TELEGRAM_BOT_TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN';
export const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;

export const CLOUDFLARE_WORKER_LIMITS = {
  executionTimeMs: 50, // Free-tier max execution time
};

export const TELEGRAM_LIMITS = {
  messagesPerSecond: 30, // Telegram API allows 30 messages per second
  groupMessagesPerSecond: 20,
};
