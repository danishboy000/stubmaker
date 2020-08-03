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
        <script src="https://www.paypal.com/sdk/js?client-id=sb"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src = '/html2canvas.min.js' />
          <script src="https://unpkg.com/jspdf@latest/dist/jspdf.min.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
