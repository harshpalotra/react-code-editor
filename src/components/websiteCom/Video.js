import React from 'react'

export default function Video() {
  return (
    <div>
      <section class="watch-video">

<div class="video-container">
   <div class="video">
      <video src="images/vid-1.mp4" controls poster="images/post-1-1.png" id="video"></video>
   </div>
   <h3 class="title">complete HTML tutorial (part 01)</h3>
   <div class="info">
      <p class="date"><i class="fas fa-calendar"></i><span>22-10-2022</span></p>
      <p class="date"><i class="fas fa-heart"></i><span>44 likes</span></p>
   </div>
   <div class="tutor">
      <img src="images/pic-2.jpg" alt=""/>
      <div>
         <h3>Ramesh</h3>
         <span>developer</span>
      </div>
   </div>
   <form action="" method="post" class="flex">
      <a href="playlist" class="inline-btn">view playlist</a>
      <button><i class="far fa-heart"></i><span>like</span></button>
   </form>
   <p class="description">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque labore ratione, hic exercitationem mollitia obcaecati culpa dolor placeat provident porro.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid iure autem non fugit sint. A, sequi rerum architecto dolor fugiat illo, iure velit nihil laboriosam cupiditate voluptatum facere cumque nemo!
   </p>
</div>

</section>
</div>
  );
}