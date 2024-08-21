document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const phone = document.getElementById('phone').value;
  const name = "From idukkispices.com"; 
  const message = "Interested in purchasing the domain.";

  fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
          accept: "application/json",
          "api-key": import.meta.env.VITE_BREVO_API_KEY,
          "content-type": "application/json",
      },
      body: JSON.stringify({
          sender: {
              name,
              email: "noreply@idukkispices.com", // Use a generic email address or adjust as needed
          },
          to: [
              {
                  email: "thomasjojit@gmail.com",
                  name: "Jojit Thomas",
              },
          ],
          subject: "Support Request",
          htmlContent: `
              <!DOCTYPE html>
              <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>EasyNum Message</title>
                  <style>
                      body {
                          font-family: Arial, sans-serif;
                          background-color: #f4f4f4;
                          margin: 0;
                      }
                      .container {
                          max-width: 600px;
                          margin: auto;
                          background: #fff;
                          border-radius: 8px;
                          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                          border: 1px solid #ddd;
                          font-size: 14px;
                      }
                      .header {
                          background-color: #0073e6;
                          color: #fff;
                          padding: 10px;
                          border-radius: 8px 8px 0 0;
                          text-align: center;
                      }
                      .content {
                          padding: 20px;
                      }
                      .footer {
                          text-align: center;
                          color: #666;
                          padding: 10px;
                          font-size: 12px;
                      }
                  </style>
              </head>
              <body>
                  <div class="container">
                      <div class="header">
                          <h1>EasyNum Message</h1>
                      </div>
                      <div class="content">
                          <p>Hello,</p>
                          <p>${message}</p>
                          <p>From: ${name} (${phone})</p>
                      </div>
                      <div class="footer">
                          <p>&copy; 2024 EasyNum. All rights reserved.</p>
                      </div>
                  </div>
              </body>
              </html>
          `,
      }),
  })
  .then(response => {
      if (response.ok) {
          document.getElementById('success-modal').classList.remove('hidden');
      } else {
          document.getElementById('error-modal').classList.remove('hidden');
      }
  })
  .catch(error => {
      console.error("Error:", error);
      document.getElementById('error-modal').classList.remove('hidden');
  });
});
