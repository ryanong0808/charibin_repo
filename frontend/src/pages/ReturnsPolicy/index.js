import React from 'react'

import ContactTextLink from 'components/ContactTextLink'
import FrontContainerLayout from 'layouts/FrontContainerLayout'
import Section from 'components/Section'


const breadcrumbPath = [
  { route: '/', text: 'Home' },
  { text: 'Returns Policy' },
]

const ReturnsPolicy = () => (
  <FrontContainerLayout
    breadcrumbPath={breadcrumbPath}
    title="Returns Policy"
    subscribe
  >
    <Section className="page-content">
      <p>
        Returns must be requested within 14 days of purchase or shipment date and
        items must be received within 21 days of purchase or shipment date. Items
        received after 21 days or with the security tag missing or removed cannot
        be returned. Those items are eligible for resale or will be returned to
        the customer.
      </p>
      <h5>THE FOLLOWING ITEMS NOT ELIGIBLE FOR RETURN</h5>
      <p>
        Handbags, swimwear, luggage, beauty products and any and all items that
        have been used or worn. All items that are tagged as exclusive items are
        not eligible for return.
      </p>
      <p>
        We recognize that returns are important to our customers. However, where we
        determine in our sole discretion that a customer is returning an unreasonable
        number of purchases, we may restrict or refuse that customer’s access to the
        Charibin platform.
      </p>
      <h5>PACKING AND SHIPPING</h5>
      <p>
        Buyers are responsible for all shipping costs and fees. We will, at the buyer’s
        expense, either provide packing, handling, insurance and shipping services or
        coordinate with shipping agents instructed by the buyer in order to facilitate
        such services for property purchased from Charibin. As a courtesy to buyers,
        Charibin will, without charge, wrap purchased items for hand carry only. Any
        such instruction, whether or not made at our recommendation, is entirely at the
        buyer’s risk and responsibility and we will not be liable for acts or omissions
        of third party packers or shippers. Charibin will require presentation of
        government issued identification prior to release of a piece to the buyer or
        the buyer’s authorized representative.
      </p>
    </Section>
    <ContactTextLink />

  </FrontContainerLayout>
)

export default ReturnsPolicy
