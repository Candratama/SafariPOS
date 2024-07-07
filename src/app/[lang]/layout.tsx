import { headers } from 'next/headers'

// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'
import { i18n } from '@/configs/i18n'
import type { Locale } from '@/configs/i18n'

// Type Imports
import type { ChildrenType } from '@core/types'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'
import TranslationWrapper from '@/hocs/TranslationWrapper'

export const metadata = {
  title: 'Safari POS',
  description: 'Sales and inventory management system for small and medium-sized businesses.'
}

const RootLayout = ({ children, params }: ChildrenType & { params: { lang: Locale } }) => {
  // Vars
  const headersList = headers()
  const direction = i18n.langDirection[params.lang]

  return (
    <TranslationWrapper headersList={headersList} lang={params.lang}>
      <html id='__next' lang={params.lang} dir={direction}>
        <body className='flex is-full min-bs-full flex-auto flex-col'>{children}</body>
      </html>
    </TranslationWrapper>
  )
}

export default RootLayout
