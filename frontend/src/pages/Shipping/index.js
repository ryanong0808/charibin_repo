import React from 'react'

import ContactTextLink from 'components/ContactTextLink'
import FrontContainerLayout from 'layouts/FrontContainerLayout'


const breadcrumbPath = [
  { route: '/', text: 'Home' },
  { text: 'Shipping' },
]

const Shipping = () => (
  <FrontContainerLayout
    breadcrumbPath={breadcrumbPath}
    title="Shipping"
    subscribe
  >
    <p>
      We ship to all US states and territories, as well as PO boxes and APO/FPO addresses. Most
      standard shipping orders placed before 5 p.m. EST will be processed within two business
      days after your order is placed. Please note that some orders may take longer to process.
      All orders are subject to credit approval. Orders for express delivery may be placed Monday
      through Thursday before 3 p.m. EST. Express delivery orders placed between 3 p.m. Thursday
      and 3 p.m. Friday will arrive on Monday; those placed after 3 p.m. Friday will arrive on
      Tuesday. We do not ship or deliver on Saturdays, Sundays or holidays.
    </p>
    <ContactTextLink />
  </FrontContainerLayout>
)

export default Shipping
