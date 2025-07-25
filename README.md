# Telegram Webhook Bot

This is a simple Node.js Telegram bot webhook that receives signals and forwards them to a Telegram user or channel.

## Deployment

1. Add environment variables:
   - `BOT_TOKEN`: Your Telegram bot token.
   - `CHAT_ID`: Chat ID to send messages to.

2. Deploy using Railway, Render, or any Node.js-compatible platform.

3. Set your webhook endpoint in your TradingView or signal source.

## Example Signal Format
```
{
  "message": "🚀 BTC/USDT Long Entry at 29800"
}
```