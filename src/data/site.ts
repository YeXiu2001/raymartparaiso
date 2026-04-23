export const SITE_URL = "https://raymartparaiso.com";
export const SITE_NAME = "Raymart Paraiso";
export const PERSON_NAME = "Allan Raymart Paraiso";
export const PERSON_ALT_NAME = "Raymart Paraiso";
export const JOB_TITLE = "Full Stack Developer";
export const LOCATION = "Pagadian City";
export const CONTACT_EMAIL = "allanraymart.paraiso.dev@gmail.com";
export const CONTACT_PHONE = "+639383025631";
export const PROFILE_HEADSHOT_PATH = "/assets/raymart-paraiso-headshot-social.jpg";
export const PROFILE_SOCIAL_IMAGE_PATH = "/assets/raymart-paraiso-headshot-social.jpg";
export const profileImagePath = PROFILE_SOCIAL_IMAGE_PATH;

export const aboutSummary =
  "Allan Raymart Paraiso is a full-stack developer from Pagadian City specializing in Laravel and Livewire, with 2 years of experience building end-to-end web applications from product conception and system design to deployment, server management, and continuous improvement.";

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/YeXiu2001",
    icon: "fa-brands fa-github",
    colorClass: "text-gray-100",
    relMe: true,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/arcparaiso/",
    icon: "fa-brands fa-facebook",
    colorClass: "text-blue-500",
    relMe: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/phyexiu/",
    icon: "fa-brands fa-instagram",
    colorClass: "text-red-500",
    relMe: true,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/639383025631",
    icon: "fa-brands fa-whatsapp",
    colorClass: "text-green-500",
    relMe: false,
  },
] as const;

export const sameAsLinks = socialLinks.filter((link) => link.relMe).map((link) => link.href);
