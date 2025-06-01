
import emailjs from "@emailjs/browser";
export async function SendMessage({
  name,
  email,
  msg,
  tel,
}: {
  name: string;
  email: string;
  msg: string;
  tel: string;
}) {
  try {
    if (
      String(name).length > 1 &&
      String(msg).length > 1 &&
      isValidPhoneNumber(tel) &&
      isValidEmail(email)
    ) {
      const response = await emailjs.send(
        "service_va8khgo",
        "template_yg94po8",
        {
          from_name: name,
          from_email: email,
          message: msg,
          subject: "Proposta de Projecto vinda do Portfólio",
          email: email,
          from_tel: tel,
        },
        "-Q-rLM_OclMYemfOc"
      );

      if (response?.status === 200) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export async function susbribeEmail({
  email,
}: {
  email: string;
}) {
  try {
    if (
      isValidEmail(email)
    ) {
      const response = await emailjs.send(
        "service_va8khgo",
        "template_yg94po8",
        {
          from_name: "Cliente",
          from_email: email,
          message: "Susbcrição de email",
          subject: "Proposta de Projecto vinda do Portfólio",
          email: email,
          from_tel: "957777993",
        },
        "-Q-rLM_OclMYemfOc"
      );

      if (response?.status === 200) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
function isValidEmail(email : string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phoneNumber : string) {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phoneNumber);
}
