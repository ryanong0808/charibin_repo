import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

// Front pages
import Home from 'pages/Home'
import SignIn from 'pages/SignIn'
import SignUp from 'pages/SignUp'
import SignUpVerification from 'pages/SignUpVerification'

import AccountBids from 'pages/AccountBids'
import AccountInfo from 'pages/AccountInfo'
import AccountPassword from 'pages/AccountPassword'
import AccountPaymentInfo from 'pages/AccountPaymentInfo'
import AccountWins from 'pages/AccountWins'
import AuctionDetail from 'pages/AuctionDetail'
import Auctions from 'pages/Auctions'
import Authenticity from 'pages/Authenticity'
import Careers from 'pages/Careers'
import Donors from 'pages/Donors'
import DonorDetail from 'pages/DonorDetail'
import Faqs from 'pages/Faqs'
import HowItWorks from 'pages/HowItWorks'
import InfluencerProgram from 'pages/InfluencerProgram'
import JobDetail from 'pages/JobDetail'
import Mission from 'pages/Mission'
import PostDetail from 'pages/PostDetail'
import Posts from 'pages/Posts'
import PrivacyPolicy from 'pages/PrivacyPolicy'
import ReturnsPolicy from 'pages/ReturnsPolicy'
import Shipping from 'pages/Shipping'
import Support from 'pages/Support'
import TermsConditions from 'pages/TermsConditions'

// Admin pages
import AdminAuthenticating from 'pages/AdminAuthenticating'
import AdminCharityList from 'pages/AdminCharityList'
import AdminCharityCreate from 'pages/AdminCharityCreate'
import AdminCharityDetail from 'pages/AdminCharityDetail'
import AdminDonorList from 'pages/AdminDonorList'
import AdminDonorCreate from 'pages/AdminDonorCreate'
import AdminDonorDetail from 'pages/AdminDonorDetail'
import AdminDonorProductList from 'pages/AdminDonorProductList'
import AdminProductList from 'pages/AdminProductList'
import AdminProductCreate from 'pages/AdminProductCreate'
import AdminProductDetail from 'pages/AdminProductDetail'
import AdminAuctionList from 'pages/AdminAuctionList'
import AdminAuctionCreate from 'pages/AdminAuctionCreate'
import AdminAuctionDetail from 'pages/AdminAuctionDetail'
import AdminAuctionStart from 'pages/AdminAuctionStart'
import AdminAuctionBidList from 'pages/AdminAuctionBidList'
import AdminUserList from 'pages/AdminUserList'
import AdminUserHistory from 'pages/AdminUserHistory'
import AdminMediumList from 'pages/AdminMediumList'
import AdminSaleList from 'pages/AdminSaleList'
import AdminSaleDetail from 'pages/AdminSaleDetail'
import AdminPostList from 'pages/AdminPostList'
import AdminPostCreate from 'pages/AdminPostCreate'
import AdminPostDetail from 'pages/AdminPostDetail'
import AdminBacklog from 'pages/AdminBacklog'
import AdminSettingsList from 'pages/AdminSettingsList'
import AdminSettingsCategoriesMenuItems from 'pages/AdminSettingsCategoriesMenuItems'

// Managers (currently implemented as invisible page components)
import RealTimeNotificationManager from 'managers/RealTimeNotificationManager'

// Modals
import AccountCreatedModal from 'components/AccountCreatedModal'
import AuctionAddCardModal from 'components/AuctionAddCardModal'
import AuctionBidModal from 'components/AuctionBidModal'
import AuctionBidPlacedModal from 'components/AuctionBidPlacedModal'
import ConfirmModal from 'components/ConfirmModal'
import DonateModal from 'components/DonateModal'
import MessageModal from 'components/MessageModal'
import SignInModal from 'components/SignInModal'
import SignUpModal from 'components/SignUpModal'
import SubscribeModal from 'components/SubscribeModal'

// Auth wrappers
import {
  userIsAuthenticated,
  userIsNotAuthenticated,
  currentUserNotLoadedForAdmin,
  userIsAdmin,
} from './auth-wrapper'


// Layout components
import AccountLayout from 'layouts/AccountLayout'
import AdminLayout from 'layouts/AdminLayout'

import ScrollToTop from 'components/ScrollToTop'

const AdminRoutes = props => (
  <AdminLayout>
    <Route exact path="/admin" render={() => (<Redirect to="/admin/auctions" />)} />
    <Route exact path="/admin/charities" component={AdminCharityList} />
    <Route exact path="/admin/charities/create" component={AdminCharityCreate} />
    <Route exact path="/admin/charities/:id(\d+)" component={AdminCharityDetail} />
    <Route exact path="/admin/do-gooders" component={AdminDonorList} />
    <Route exact path="/admin/do-gooders/create" component={AdminDonorCreate} />
    <Route exact path="/admin/do-gooders/:id(\d+)" component={AdminDonorDetail} />
    <Route exact path="/admin/do-gooders/:id(\d+)/products" component={AdminDonorProductList} />
    <Route exact path="/admin/products" component={AdminProductList} />
    <Route exact path="/admin/products/create" component={AdminProductCreate} />
    <Route exact path="/admin/products/:id(\d+)" component={AdminProductDetail} />
    <Route exact path="/admin/auctions" component={AdminAuctionList} />
    <Route exact path="/admin/auctions/create" component={AdminAuctionCreate} />
    <Route exact path="/admin/auctions/:id(\d+)" component={AdminAuctionDetail} />
    <Route exact path="/admin/auctions/:id(\d+)/start" component={AdminAuctionStart} />
    <Route exact path="/admin/auctions/:id(\d+)/bids" component={AdminAuctionBidList} />
    <Route exact path="/admin/sales" component={AdminSaleList} />
    <Route exact path="/admin/sales/:id(\d+)" component={AdminSaleDetail} />
    <Route exact path="/admin/posts" component={AdminPostList} />
    <Route exact path="/admin/posts/create" component={AdminPostCreate} />
    <Route exact path="/admin/posts/:id(\d+)" component={AdminPostDetail} />
    <Route exact path="/admin/users" component={AdminUserList} />
    <Route exact path="/admin/users/:id(\d+)/history" component={AdminUserHistory} />
    <Route exact path="/admin/media" component={AdminMediumList} />
    <Route exact path="/admin/backlog" component={AdminBacklog} />
    <Route exact path="/admin/settings" component={AdminSettingsList} />
    <Route exact path="/admin/settings/categories-menu-items" component={AdminSettingsCategoriesMenuItems} />
  </AdminLayout>
)

const AccountRoutes = props => (
  <AccountLayout>
    <Route exact path="/account" component={() => <Redirect to="/account/bids" />} />
    <Route exact path="/account/bids" component={AccountBids} />
    <Route exact path="/account/wins" component={AccountWins} />
    <Route exact path="/account/info" component={AccountInfo} />
    <Route exact path="/account/payment-info" component={AccountPaymentInfo} />
    <Route exact path="/account/change-password" component={AccountPassword} />
  </AccountLayout>
)

const FrontendRoutes = props => (
  <Switch>
    <Route exact path="/" component={Home} />

    <Route exact path="/signin" component={userIsNotAuthenticated(SignIn)} />
    <Route exact path="/signup" component={userIsNotAuthenticated(SignUp)} />
    <Route exact path="/verify-account/:token" component={SignUpVerification} />

    <Route exact path="/auctions" component={Auctions} />
    <Route exact path="/auctions/new-arrivals" component={Auctions} />
    <Route exact path="/auctions/:id" component={AuctionDetail} />

    <Route exact path="/do-gooders" component={Donors} />
    <Route exact path="/do-gooders/:id" component={DonorDetail} />

    <Route exact path="/blog" component={Posts} />
    <Route exact path="/blog/posts/:id" component={PostDetail} />

    <Route exact path="/authenticity" component={Authenticity} />
    <Route exact path="/careers" component={Careers} />
    <Route exact path="/faqs" component={Faqs} />
    <Route exact path="/how-it-works" component={HowItWorks} />
    <Route exact path="/influencer-program" component={InfluencerProgram} />
    <Route exact path="/jobs/:id" component={JobDetail} />
    <Route exact path="/mission" component={Mission} />
    <Route exact path="/privacy-policy" component={PrivacyPolicy} />
    <Route exact path="/returns" component={ReturnsPolicy} />
    <Route exact path="/shipping" component={Shipping} />
    <Route exact path="/support" component={Support} />
    <Route exact path="/terms-conditions" component={TermsConditions} />
  </Switch>
)

const modals = (
  <div>
    <AccountCreatedModal />
    <AuctionAddCardModal />
    <AuctionBidModal />
    <AuctionBidPlacedModal />
    <ConfirmModal />
    <DonateModal />
    <MessageModal />
    <SignInModal />
    <SignUpModal />
    <SubscribeModal />
  </div>
)

const Routes = ({ history }) => (
  <ConnectedRouter history={history}>
    <ScrollToTop>
      <Switch>
        <Route path="/admin" component={userIsAdmin(AdminRoutes)} />
        <Route exact path="/admin-authenticating" component={userIsAuthenticated(currentUserNotLoadedForAdmin(AdminAuthenticating))} />
        <Route path="/account/:slug?" component={userIsAuthenticated(AccountRoutes)} />
        <Route path="/" component={FrontendRoutes} />
      </Switch>
      {modals}
      <RealTimeNotificationManager />
    </ScrollToTop>
  </ConnectedRouter>
)

export default Routes
