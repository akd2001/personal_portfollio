import StyledComponentsRegistry from "@/components/styledRegistry";
import "../styles/global.css";
import { Maven_Pro } from "next/font/google";

export const metadata = {
  title: "Sayandeep Karak",
  description: "Sayandeep Karak's personal portfolio",
};

const popp = Maven_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={popp.className}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
