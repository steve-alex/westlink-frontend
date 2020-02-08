import React from "react";
import { Route } from "react-router-dom";
import { HomePage } from '../pages/HomePage'
import { BookingsPage } from '../pages/BookingsPage'
import { ProfilePage } from '../pages/ProfilePage'
import { InformationPage } from '../pages/InformationPage'

export const MainContainer = () => {
  return (
    <div>
      <Route path='/home'>
        <HomePage/>
      </Route>
      <Route path='/bookings'>
        <BookingsPage />
      </Route>
      <Route path='/profile'>
        <ProfilePage />
      </Route>
      <Route path='/information'>
        <InformationPage />
      </Route>
    </div>
  )
}
