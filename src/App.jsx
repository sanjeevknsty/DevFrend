import React from 'react';
import Header from './components/Header';
import Story from './components/Story';
import Home from './components/Home';
import Testimonials from './components/Testimonials';
import PremiumGrooming from './components/PremiumGrooming';
import OurCommitment from './components/OurCommitment';
import Pricing from './components/Pricing';
import WorkShop from './components/WorkShop';
import ExpertStylists from './components/ExpertStylists';
import BookYourAppointment from './components/BookYourAppointment';
import CommonQuestions from './components/CommonQuestions';
import VisitOurShop from './components/VisitOurShop';
import LastPage  from './components/LastPage';


const App = () => (
  <>
    <Header />
    <Home/>
    <Story/>
    <PremiumGrooming/>
    <OurCommitment/>
    <Testimonials/>
    <Pricing/>
    <WorkShop/>
    <ExpertStylists/>
    <BookYourAppointment/>
    <VisitOurShop/>
    <CommonQuestions/>
    <LastPage/>
  </>
);

export default App;
