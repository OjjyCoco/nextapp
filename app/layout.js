import CustomRainbowKitProvider from "./CustomRainbowKitProvider"
import "./globals.css"
import Layout from "@/components/shared/Layout"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils" // shadcn

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "NathanB",
  description: "First DApp with Tailwind / Shadcn-UI", // Important pour le SEO
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomRainbowKitProvider>
          <Layout>
            {children}
          </Layout>
        </CustomRainbowKitProvider>
      </body>
    </html>
  )
}

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head />
//       <body
//         className={cn(
//           "min-h-screen bg-background font-sans antialiased",
//           fontSans.variable
//         )}
//       >
//         <Layout>
//           {children}
//         </Layout>
//       </body>
//     </html>
//   )
// }