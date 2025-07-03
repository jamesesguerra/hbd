import emailjs from "emailjs-com";

export async function sendSOS(message) {
  emailjs
    .send(
      import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
      import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
      message,
      import.meta.env.PUBLIC_EMAILJS_USER_ID
    )
    .then(() => {})
    .catch((err) => {
      console.error("Failed to send SOS", err);
    });
}
