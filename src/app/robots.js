import { userAgent } from "next/server";
import sitemap from "./sitemap";


export default function robots() {
  return {
    rules:{
        userAgent:"*",
        allow:"/"
    },
    sitemap:"https://mosadegh-insurance.ir/sitemap.xml"
  }
}
