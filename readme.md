# Node.js Notification System (Email, SMS, Slack)

This project is a simple Node.js-based notification system that supports sending messages via:

- Email (using Nodemailer)
- SMS (via Twilio or similar)
- Slack (via Webhooks)

# Features

- Send email notifications using SMTP (Gmail)
- Send SMS using Twilio or similar provider
- Send messages to a Slack channel using incoming webhook

# Setup Instructions

# 1. Clone the repository


```bash
git clone https://github.com/apoorvabommineni/notification.git
cd notification

#  2. Install dependencies

npm install

 # 3. Create a .env file in the root directory

PORT=8000
MAILTRAP_USER=youremail@gmail.com
MAILTRAP_PASS=your_password
TWILIO_ACCOUNT_SID=your_twil_id
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_phone_number
SLACK_WEBHOOK_URL=your_webhook_url

# 4. Make sure you include

node_modules/
.env

# 5. Run the application

npm start

# 6.  API Usage

Endpoint

POST http://localhost:8000/notify/noticationPost

Sample Request Body (JSON)


{
  "message": "Your order has been shipped!",
  "recipients": [
    { "type": "email", "to": "apoorvabommineni@gmail.com" },
    { "type": "sms", "to": "+919573146648" },
    { "type": "slack", "to": "#shipping-alerts" }
  ]
}


