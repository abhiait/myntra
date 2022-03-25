import React from 'react'
import './Profile.css'

export default function Profile() {
  return (
    <div className='profile'>
    <div>
        <h4>Welcome</h4>
        <p>lo access acount and manage orders</p>
        <button> LOGIN/SIGNUP </button>
    </div>
    <hr/>
    <div>
        <p>Orders</p>
        <p>Wishlist</p>
        <p>Gift Cards</p>
        <p>Contact Us</p>
        <p>Myntra Insider <i> New</i></p>
    </div>
    <hr/>
    <div>
        <p>Myntra Credit</p>
        <p>Coupons</p>
        <p>Saved Cards</p>
        <p>Saved Addresses</p>
    </div>
    </div>
  )
}
