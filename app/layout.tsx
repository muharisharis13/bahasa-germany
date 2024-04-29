import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "BUKU AJAR PEMBELAJARAN TATA BAHASA JERMAN",
  description: "BUKU AJAR PEMBELAJARAN TATA BAHASA JERMAN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var audio = document.createElement("AUDIO")
              document.body.appendChild(audio);
              audio.src = "./musik.mp4"
                audio.muted = false
              document.addEventListener("DOMContentLoaded", function(event) {
                
              audio.play()
            });
                  `,
          }}
        ></script>
      </body>
    </html>
  );
}
