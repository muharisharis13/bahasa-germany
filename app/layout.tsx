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
        <button id="btnAlert" style={{display:'none'}} >Alert</button>
        <audio id="MyAudioElement" autoPlay style={{display:'none'}}>
          <source src="musik.mp4" type="audio/mpeg"></source>
        </audio>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              
              // var button = document.getElementById('btnAlert');
              // setTimeout(function(){
              //     button.click();
              // },1000); 
              
              document.addEventListener('click', function() {
                
                document.getElementById('MyAudioElement').play()
              });
           
                  `,
          }}
        ></script>
      </body>
    </html>
  );
}
