import { pageMetadata } from "../../config/site";

export const metadata = pageMetadata({
  title: "Contact – Where Ideas Meet Capital",
  description:
    "Connect with our team for investment opportunities, strategic partnerships, and portfolio advisory.",
  path: "/contact",
});

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
