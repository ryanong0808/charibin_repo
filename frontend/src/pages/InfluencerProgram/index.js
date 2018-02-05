import React from 'react'

import ContactTextLink from 'components/ContactTextLink'
import FrontContainerLayout from 'layouts/FrontContainerLayout'
import Section from 'components/Section'


const breadcrumbPath = [
  { route: '/', text: 'Home' },
  { text: 'Influencer Program' },
]

const InfluencerProgram = () => (
  <FrontContainerLayout
    breadcrumbPath={breadcrumbPath}
    title="Influencer Program"
    subscribe
  >
    <Section className="page-content">
      <p>
        We’ve noticed that you’ve been sharing the word about Charibin, so we’ve
        created an Influencer Program to thank you for your support. Besides the
        awesome reward of being a Do-Gooder and influencing other Do-Gooders our
        program rewards you for championing the Charibin platform and experience
        by giving you incentives we think you’ll appreciate.
      </p>
      <ul>
        <li>Cash payouts for each new seller that submits their items</li>
        <li>Invitations to private events we host just for Charibin affiliates</li>
        <li>Opportunities for cross-promotions, giveaways and other partnerships</li>
        <li>Occasional gifts and other surprises to show our appreciation for you</li>
      </ul>
      <p>
        We’re honored by your support and excited to invite you to join our Influencer
        Program!
      </p>
      <p>
        We hope you’ll enjoy being a part of our community.
      </p>
    </Section>
    <ContactTextLink />

  </FrontContainerLayout>
)

export default InfluencerProgram
