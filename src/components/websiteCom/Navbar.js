
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';


export default function Navbar() {
  return (
    <div>
      <header className="header">
   
   <section className="flex">

      <a href="/" className="logo">Educa.</a>

      <form action="search.html" method="post" className="search-form">
         <input type="text" name="search_box" required placeholder="search courses..." maxlength="100"/>
         <button type="submit" className="fas fa-search"></button>
      </form>

      <div className="icons">
         <div id="menu-btn" className="fas fa-bars"></div>
         <div id="search-btn" className="fas fa-search"></div>
         <div id="user-btn" className="fas fa-user"></div>
         <div id="toggle-btn" className="fas fa-sun"></div>
      </div>

      <div className="profile">
         <img src="images/pic-1.jpg" className="image" alt=""/>
         <h3 className="name">Hariom patidar</h3>
         <p className="role">student</p>
         <a href="profile.html" className="btn">view profile</a>
         <div className="flex-btn">
            <a href="login.html" className="option-btn">login</a>
            <a href="register.html" className="option-btn">register</a>
         </div>
      </div>

   </section>

</header>   


    </div>
  );
}
