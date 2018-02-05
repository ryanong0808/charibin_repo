import React from 'react'

import ContactTextLink from 'components/ContactTextLink'
import FrontContainerLayout from 'layouts/FrontContainerLayout'
import Section from 'components/Section'


const breadcrumbPath = [
  { route: '/', text: 'Home' },
  { text: 'Authenticity' },
]

const Authenticity = () => (
  <FrontContainerLayout
    breadcrumbPath={breadcrumbPath}
    title="Authenticity"
    subscribe
  >
    <Section className="page-content">
      <p>
        Authenticity is a crutial part to making sure people sell real authentic items. We work
        with seasoned professionals including gemologists, horologists and apparel experts who
        ensure the items sold on our platform are authentic and in great condition.
      </p>
      <p>
        All items are put through a multi-point, brand-specific authentication process by a
        trained team of luxury and fashion experts before they are listed for aution. We inspect
        all goods for appropriate brand markings, date codes, serial tags and hologram stickers.
        Everything passes through our strict authenticity tests before we create the auction
        listings. Our fine jewelry and watches are authenticated and appraised by our gemologists
        and horologists. Fahion items are thoroughly researched and validated by our team of
        fashion specialists.
      </p>
      <p>
        Charibin’s authentication process is unique to Charibin and independent of any brands.
        Brands identified are not involved in the authentication of the products being sold, and
        none of the brands sold assume any responsibility for any products purchased from or
        through the website. Brands sold on Charibin are not partnered or affiliated with Charibin
        in any manner. However, Charibin fully cooperates with brands and state and federal agencies
        seeking to track down the source of stolen or counterfeit items, which includes revealing
        the contact information of consignors submitting counterfeit goods.
      </p>
      <p>
        Charibin does not accept fake or counterfeit merchandise. If we suspect for any reason
        that a submitted item is not authentic we will make an attempt to contact the seller for
        proof of purchase in an effort to establish the items authenticity. Items that Charibin
        determines are counterfeit will not be returned to the seller and will be destroyed.
      </p>
    </Section>
    <ContactTextLink />

  </FrontContainerLayout>
)

export default Authenticity
