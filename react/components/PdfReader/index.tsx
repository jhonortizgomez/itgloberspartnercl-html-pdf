import React, { useEffect, useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'

type Props = {
  pdfUrl: string
  width: number
  height: number
}

const PdfReader = ({ pdfUrl, width }: Props) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const CSS_HANDLES = ['container', 'container__pdf', 'pdf']
  const handles = useCssHandles(CSS_HANDLES)

  return (
    mounted && (
      <div className={handles.container}>
        <object
          width={width}
          className={handles.container__pdf}
          data={pdfUrl}
          type="application/pdf"
        >
          <iframe
            width={width}
            className={handles.pdf}
            title="PDF"
            src={pdfUrl}
          >
            <p>Este navegador no soporta PDF!</p>
          </iframe>
        </object>
      </div>
    )
  )
}

export default PdfReader
