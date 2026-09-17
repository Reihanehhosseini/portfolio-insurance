
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
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "شیما مصدق",
              description:
                "مشاور بیمه آسیا با 14 سال تجربه در ارائه مشاوره، صدور و پیگیری خدمات بیمه ای",
              areaServed: {
                "@type": "City",
                name: "اصفهان",
              },
              knowsAbout: [
                "بیمه اتومبیل",
                "بیمه مسئولیت",
                "بیمه آتش سوزی",
                "بیمه عمر",
                "بیمه درمانی",
                "بیمه مسافرتی",
                "بیمه حمل  و نقل",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "برای انتخاب بیمه مناسب از کجا شروع کنم؟",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "با توجه به نیاز، شرایط و میزان پوشش موردنظر شما، گزینه‌های مناسب بررسی و مقایسه می‌شوند تا بتوانید بهترین انتخاب را داشته باشید.",
                  },
                },
                {
                  "@type": "Question",
                  name: "آیا برای دریافت مشاوره باید حضوری مراجعه کنم؟",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "خیر، شما می‌توانید به صورت تلفنی یا آنلاین با من در ارتباط باشید تا با توجه به نیاز و شرایط شما، بهترین گزینه بیمه‌ای پیشنهاد شود.",
                  },
                },
                {
                  "@type": "Question",
                  name: "چه مدارکی برای صدور بیمه‌نامه لازم است؟",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "مدارک موردنیاز بسته به نوع بیمه متفاوت است. پس از مشخص شدن نوع بیمه، مدارک لازم به شما اعلام خواهد شد.",
                  },
                },
                {
                  "@type": "Question",
                  name: "آیا امکان مقایسه چند بیمه‌نامه وجود دارد؟",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "بله، می‌توانیم شرایط، پوشش‌ها و مزایای گزینه‌های مختلف را بررسی کنیم تا انتخاب مناسب‌تری داشته باشید.",
                  },
                },
                {
                  "@type": "Question",
                  name: "روند صدور بیمه‌نامه چقدر زمان می‌برد؟",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "زمان صدور به نوع بیمه و شرایط آن بستگی دارد اما معمولا بین یک تا چندساعت زمان میبرد.",
                  },
                },
                {
                  "@type": "Question",
                  name: "آیا بعد از صدور بیمه‌نامه خدمات پشتیبانی ارائه می‌شود؟",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "بله، خدمات مشاوره و پشتیبانی پس از صدور بیمه‌نامه نیز در دسترس شما خواهد بود.",
                  },
                },
                {
                  "@type": "Question",
                  name: "در صورت بروز خسارت چه کاری باید انجام دهم؟",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "در صورت بروز خسارت، ابتدا با من تماس بگیرید تا مراحل لازم و مدارک موردنیاز برای پیگیری خسارت به شما توضیح داده شود.",
                  },
                },
                {
                  "@type": "Question",
                  name: "چگونه می‌توانم بیمه‌نامه خود را تمدید کنم؟",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "10 روز پیش از پایان اعتبار بیمه‌نامه با شما تماس حاصل میشود و در صورت تمایل بیمه نامه شما تمدید میگردد .",
                  },
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
