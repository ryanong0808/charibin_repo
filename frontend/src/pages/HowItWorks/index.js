import React from 'react'

import ContactTextLink from 'components/ContactTextLink'
import FrontContainerLayout from 'layouts/FrontContainerLayout'
import StepItem from 'components/StepItem'
import stepBg1 from 'images/how-it-works/step-bg-1.jpg'
import stepBg2 from 'images/how-it-works/step-bg-2.jpg'
import stepBg3 from 'images/how-it-works/step-bg-3.jpg'
import stepBg4 from 'images/how-it-works/step-bg-4.jpg'

const breadcrumbPath = [
  { route: '/', text: 'Home' },
  { text: 'How It Works' },
]

const HowItWorks = () => (
  <FrontContainerLayout
    breadcrumbPath={breadcrumbPath}
    title="How It Works"
    subscribe
  >
    <p>
      We built this platform so that your goods can do good. Our job is to help
      you sell your items as easy as possible. We work hard so you don’t have to.
      If you follow the steps below your things could serve a greater purpose by
      supporting the causes that you love.
    </p>

    <StepItem
      step={1}
      title="FIND YOUR GOODS TO SELL"
      image={stepBg1}
    >
      From clothes, jewelry, home décor and accessories if it has value, it may
      help support your cause. Let your goods do good.
    </StepItem>

    <StepItem
      step={2}
      title="REQUEST A BIN & SHIP YOUR ITEMS"
      image={stepBg2}
    >
      Simply submit your email to Become a Do-Gooder and we’ll send you a bin to
      ship your items back to us back at no charge to you.
    </StepItem>

    <StepItem
      step={3}
      title="OUR EXPERTS CHECK AUTHENTICITY & CREATE PROFESSIONAL LISTINGS"
      image={stepBg3}
    >
      We make sure to check every item and those that qualify will have a professional
      auction page created.
    </StepItem>

    <StepItem
      step={4}
      title="YOUR CAUSE RECEIVES FUNDS"
      image={stepBg4}
    >
      After each auction ends we will transfer the funds to the cause that you chose
      and send you receipt for your support.
    </StepItem>

    <ContactTextLink />
  </FrontContainerLayout>
)

export default HowItWorks
