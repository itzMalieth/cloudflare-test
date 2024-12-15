import { TELEGRAM_API_URL } from './config.js';

export async function sendResponse(chatId, text) {
  const url = `${TELEGRAM_API_URL}/sendMessage`;
  const body = {
    chat_id: chatId,
    text: text,
    parse_mode: "Markdown",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return response.ok;
  } catch (err) {
    console.error("Error sending message:", err);
    return false;
  }
}

export async function handleUpdate(update) {
  if (!update.message || !update.message.text) return;

  const chatId = update.message.chat.id;
  const messageText = update.message.text.trim();

  const { start, help, info, unknown } = await import('./commands.js');

  if (messageText.startsWith("/start")) {
    await start(chatId, sendResponse);
  } else if (messageText.startsWith("/help")) {
    await help(chatId, sendResponse);
  } else if (messageText.startsWith("/info")) {
    await info(chatId, sendResponse);
  } else {
    await unknown(chatId, sendResponse);
  }
}
