
import "./globals.css";
import localFont from "next/font/local";


export const metadata = {
  title: "شیما مصدق | مشاور بیمه آسیا در اصفهان ",
  description: "شیما مصدق ، مشاور بیمه آسیا با 14 سال تجربه در ارائه مشاوره و خدمات بیمه ای : بیمه اتومبیل ، مسئولیت ، آتش سوزی و سایر خدمات بیمه ای  در اصفهان",
};
const myFont = localFont({
  src: [
    {
      path: "../fonts/yekan/YekanBakh-Bold.woff",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-myfont",
});
const estedad = localFont({
  src: [
    {
      path: "../fonts/estedad/Estedad-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/estedad/Estedad-Medium.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-estedad",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={` ${myFont.variable}  ${estedad.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-myfont!">{children}</body>
    </html>
  );
}
