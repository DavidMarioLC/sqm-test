import style from "./style.module.css";
// import Link from "next/link";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";
// this button could be "Button" or "Link"
// variants: solid | outline | ghost
// colors: blue | green | white

export const Button = ({ variant, color, href, target = "_self", fullWidth = false, isOnlyIcon = false, className = "", children, ...props }) => {
  const locale = useLocale();
  //applying polimorphic pattern
  const Tag = typeof href === "string" ? Link : "button";

  return (
    <Tag
      {...props}
      href={href}
      locale={locale}
      rel={`${href ? "noopener noreferrer" : ""}`}
      target={`${href ? target : "_self"}`}
      className={`
      ${style.button} 
      ${style[variant]} 
      ${style[color]} 
      ${fullWidth ? "w-100" : " "} 
      ${isOnlyIcon ? style.isOnlyIcon : ""}
      ${className}
      `}
    >
      {children}
    </Tag>
  );
};

export const ButtonFixed = ({ href, icon, children }) => {
  const locale = useLocale();
  return (
    <Link locale={locale} href={href} target="_blank" className={`${style.buttonFixed}`} aria-label="Enlace de contacto">
      {icon && icon}
      <span className={style.buttonFixed__text}>{children}</span>
    </Link>
  );
};

export const ButtonGoToTop = ({ children }) => {
  return (
    <Button href="#" variant="solid" color="green" className={`text-2xl ${style.buttonGoToTop}`} isOnlyIcon>
      {children}
    </Button>
  );
};
