import StyledComponentsRegistry from "@/lib/styledRegistry";
import "./global.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Sayandeep Karak",
  description: "Sayandeep Karak's personal portfolio",
};

const popp = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
