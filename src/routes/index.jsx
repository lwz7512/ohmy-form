import React, { ReactNode, useEffect } from 'react';
import { createBrowserRouter, useLocation } from 'react-router-dom';

import { GuestLayout, DashboardLayout } from '@/layouts';
import {
  ErrorPage,
  Error400Page,
  Error403Page,
  Error404Page,
  Error500Page,
  Error503Page,
  WelcomePage,
  SignInPage,
  SignUpPage,
  DefaultDashboardPage,
} from '@/pages';


// Custom scroll restoration function
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    }); // Scroll to the top when the location changes
  }, [pathname]);

  return null; // This component doesn't render anything
};

// type PageProps = {
//   children: ReactNode;
// };

/**
 * Create an HOC to wrap your route components with ScrollToTop
 * @param {ReactNode} children 
 * @returns 
 */
const PageWrapper = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
};

// Create the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <PageWrapper children={<GuestLayout />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '',
        element: <WelcomePage />,
      },
    ],
  },
  {
    path: '/auth',
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'signup',
        element: <SignUpPage />,
      },
      {
        path: 'signin',
        element: <SignInPage />,
      },
    ],
  },
  {
    path: 'errors',
    errorElement: <ErrorPage />,
    children: [
      {
        path: '400',
        element: <Error400Page />,
      },
      {
        path: '403',
        element: <Error403Page />,
      },
      {
        path: '404',
        element: <Error404Page />,
      },
      {
        path: '500',
        element: <Error500Page />,
      },
      {
        path: '503',
        element: <Error503Page />,
      },
    ],
  },
  {
    path: '/dashboards',
    element: <PageWrapper children={<DashboardLayout />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: 'default',
        element: <DefaultDashboardPage />,
      },
      // {
      //   path: 'projects',
      //   element: <ProjectsDashboardPage />,
      // },
      // {
      //   path: 'ecommerce',
      //   element: <EcommerceDashboardPage />,
      // },
      // {
      //   path: 'marketing',
      //   element: <MarketingDashboardPage />,
      // },
      // {
      //   path: 'social',
      //   element: <SocialDashboardPage />,
      // },
      // {
      //   path: 'bidding',
      //   element: <BiddingDashboardPage />,
      // },
      // {
      //   path: 'learning',
      //   element: <LearningDashboardPage />,
      // },
      // {
      //   path: 'logistics',
      //   element: <LogisticsDashboardPage />,
      // },
    ],
  },
  // {
  //   path: '/sitemap',
  //   element: <PageWrapper children={<DashboardLayout />} />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       index: true,
  //       path: '',
  //       element: <SitemapPage />,
  //     },
  //   ],
  // },
  // {
  //   path: '/corporate',
  //   element: <PageWrapper children={<CorporateLayout />} />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       index: true,
  //       path: 'about',
  //       element: <CorporateAboutPage />,
  //     },
  //     {
  //       path: 'team',
  //       element: <CorporateTeamPage />,
  //     },
  //     {
  //       path: 'faqs',
  //       element: <CorporateFaqPage />,
  //     },
  //     {
  //       path: 'contact',
  //       element: <CorporateContactPage />,
  //     },
  //     {
  //       path: 'pricing',
  //       element: <CorporatePricingPage />,
  //     },
  //     {
  //       path: 'license',
  //       element: <CorporateLicensePage />,
  //     },
  //   ],
  // },
  // {
  //   path: '/user-profile',
  //   element: <PageWrapper children={<UserAccountLayout />} />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       index: true,
  //       path: 'details',
  //       element: <UserProfileDetailsPage />,
  //     },
  //     {
  //       path: 'preferences',
  //       element: <UserProfilePreferencesPage />,
  //     },
  //     {
  //       path: 'information',
  //       element: <UserProfileInformationPage />,
  //     },
  //     {
  //       path: 'security',
  //       element: <UserProfileSecurityPage />,
  //     },
  //     {
  //       path: 'activity',
  //       element: <UserProfileActivityPage />,
  //     },
  //     {
  //       path: 'actions',
  //       element: <UserProfileActionsPage />,
  //     },
  //     {
  //       path: 'help',
  //       element: <UserProfileHelpPage />,
  //     },
  //     {
  //       path: 'feedback',
  //       element: <UserProfileFeedbackPage />,
  //     },
  //   ],
  // },
  // {
  //   path: '/about',
  //   element: <PageWrapper children={<DashboardLayout />} />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       index: true,
  //       path: '',
  //       element: <AboutPage />,
  //     },
  //   ],
  // },
]);

export default router;
