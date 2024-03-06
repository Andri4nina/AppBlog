import React from 'react'
import "./Blog_appercu.css"
const Blog_appercu = () => {
  return (
    <>
     <div class=" relative max-w-5xl w-full mb-10 rounded-lg text-lg overflow-hidden cursor-pointer Blogcard">
            <div class="absolute top-0 left-0 right-0 bottom-0">
                <img class="absolute top-0 left-0 blog-img" src="" />
                <div class="absolute blog-textbox">
                    <div class="blog-title">Je suis un titre</div>
                    <div class="blog-subtitle">Je suis un sous-titre</div>
                    <div class="blog-bar"></div>
                    <div class="blog-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellendus consequatur repudiandae quisquam quas ipsa unde provident ea non? Dignissimos deserunt totam maiores consequatur excepturi sapiente aut cumque ut asperiores!</div>
                    <div class="blog-tagbox">
                        <span class="blog-tag">12/12/2023 </span>
                        <span class="blog-tag">0 Commentaire(s)</span>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Blog_appercu
