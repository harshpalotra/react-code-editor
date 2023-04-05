import React from 'react'

export default function SideBar() {
  return (
    <div>
      <div className="side-bar">

<div id="close-btn">
   <i className="fas fa-times"></i>
</div>

<div className="profile">
   <img src="images/img2.jpeg" className="image" alt=""/>
   <h3 className="name">Hariom Patidar</h3>
   <p className="role">student</p>
   <a href="profile" className="btn">view profile</a>
</div>

<nav className="navbar">
      <a href="/"><i className="fas fa-home"></i><span>home</span></a>
      <a href="about"><i className="fas fa-question"></i><span>about</span></a>
      <a href="courses"><i className="fas fa-graduation-cap"></i><span>courses</span></a>
      <a href="landing"><i className="fas fa-chalkboard-user"></i><span>Practice</span></a>
      <a href="roadmaps"><i className="fas fa-headset"></i><span>Roadmaps</span></a>
   </nav>

</div>
    </div>
  );
}
