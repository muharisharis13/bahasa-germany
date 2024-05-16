
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
       <div>
 <audio autoPlay controls id="audio">
          <source src="/musik.mp4" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        {children}
       </div>
    
      
        {/* <script
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
        ></script> */}
      </body>
    </html>
  );
}
