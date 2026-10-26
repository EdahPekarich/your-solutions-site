const sendEmail = async (e) => {
  e.preventDefault();

  if (sending) return;

  const serviceId = import.meta.env.LA_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.LA_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.LA_EMAILJS_PUBLIC_KEY;

  console.log("EmailJS configuration:", {
    serviceLoaded: Boolean(serviceId),
    templateLoaded: Boolean(templateId),
    publicKeyLoaded: Boolean(publicKey),
  });

  if (!serviceId || !templateId || !publicKey) {
    setSuccess(false);
    setStatus("Email configuration is missing.");
    return;
  }

  setSending(true);
  setStatus("");

  try {
    await emailjs.sendForm(
      serviceId,
      templateId,
      form.current,
      { publicKey }
    );

    setSuccess(true);
    setStatus("Your message has been sent successfully!");
    form.current.reset();
  } catch (error) {
    console.error("EmailJS Error:", error);
    setSuccess(false);
    setStatus("Something went wrong. Please try again.");
  } finally {
    setSending(false);
  }
};