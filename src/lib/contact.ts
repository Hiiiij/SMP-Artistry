export const WHATSAPP_URL =
  "https://wa.me/491706955578?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20consultation";
const PHONE_NUMBER = "01706955578";

export function handleContact() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    window.open(WHATSAPP_URL, "_blank");
  } else {
    const w = window.open(WHATSAPP_URL, "_blank");
    if (!w) {
      window.location.href = `tel:${PHONE_NUMBER}`;
    }
  }
}
