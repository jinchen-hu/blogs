import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IconContext } from 'react-icons'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel='shortcut icon' href='/45718540.jpeg' />

            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href='/45718540.jpeg'
            />
            <link
              rel='icon'
              type='image/jpeg'
              sizes='96x96'
              href='/45718540.jpeg'
            />
            <link
              rel='icon'
              type='image/jpeg'
              sizes='32x32'
              href='/45718540.jpeg'
            />
            <link
              rel='icon'
              type='image/jpeg'
              sizes='16x16'
              href='/45718540.jpeg'
            />

            <link rel='manifest' href='/manifest.json' />
          </Head>

          <body>
            <script src='noflash.js' />

            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
