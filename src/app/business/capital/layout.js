import { pageMetadata } from "../../../config/site";

export const metadata = pageMetadata({
  title: "Capital – Strategic Capital Deployment",
  description:
    "MAGNECRON provides strategic financial guidance and designs capital structures tailored to the requirements of each investment or enterprise.",
  path: "/business/capital",
});

export default function CapitalLayout({ children }) {
  return <>{children}</>;
}
