import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
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
