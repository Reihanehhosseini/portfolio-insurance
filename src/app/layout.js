
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

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={` ${myFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-myfont!">
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"ProfessionalService",
            name:"شیما مصدق",
            description:"مشاور بیمه آسیا با 14 سال تجربه در ارائه مشاوره، صدور و پیگیری خدمات بیمه ای",
            areaServed:{
              "@type":"City",
              name:"اصفهان",
            },
            knowsAbout:[
              "بیمه اتومبیل",
              "بیمه مسئولیت",
              "بیمه آتش سوزی",
              "بیمه عمر",
              "بیمه درمانی",
              "بیمه مسافرتی",
              "بیمه حمل  و نقل",
            ]
          })
        }}
        />
        {children}
        </body>
    </html>
  );
}
