import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        
        <script src="https://www.paypal.com/sdk/js?client-id=AaFwlHr6Cc2vJ1PKqMYMc4QZvtef13deQqKigVyyTcCulpNB2gppgWj1d0X3FGFxw9LsnKUrp1aN_k9a" />
        </Head>
        <body>
          <Main />
          <NextScript />
         
          <script src = '/html2canvas.min.js' />
          <script src="https://unpkg.com/jspdf@latest/dist/jspdf.min.js" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
