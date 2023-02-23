import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Post = ({title, text, image }) => (
  
    <div className='post'>

      <h1> {title} </h1>
      <p> {text} </p> 
      <img src={image} alt="pic" />

    </div>
  
)


const Page = () => (
    <div>
      <Post
        title="Iphone"
        text="telephone icon Telephones portal The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share."
        image="https://cdn.vox-cdn.com/thumbor/lZh3AYjGcqp5vzeVnd0UeHayvt8=/0x0:2040x1360/2400x1356/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/19206380/akrales_190913_3666_0391.jpg"
         />

<Post
        title="Best Music Director AWard"
        text="Music is generally defined as the art of arranging sound to create some combination of form, harmony, melody, rhythm or otherwise expressive content.[1][2][3] Exact definitions of music vary considerably around the world,[4] though it is an aspect of all human societies, a cultural universal.[5] While scholars agree that music is defined by a few specific elements, there is no consensus on their precise definitions."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHFarGQ37PAQQjzzJnnNH7HUe91AK8XAQvcg&usqp=CAU"
         />

<Post
        title="Hyundai Sonata"
        text="The Hyundai Sonata is a mid-size car that has been manufactured by Hyundai since 1985. The first generation Sonata, which was introduced in 1985, was a facelifted Hyundai Stellar with an engine upgrade, and was withdrawn from the market in two years due to poor customer reaction.[2] While the nameplate was originally only sold in South Korea,[3] the second generation of 1988 was widely exported."
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2020_Hyundai_Sonata_SEL_%28Quartz_White%29%2C_front_right.jpg/1024px-2020_Hyundai_Sonata_SEL_%28Quartz_White%29%2C_front_right.jpg"
         />
    </div>
  );



ReactDOM.render(
<Page />
 
  , document.querySelector("#root") ) 

