import React from 'react';
import useEffect from 'react';

import ShowImage from '../components/LazyImage';
import TopNavigation from "../components/TopNavigation";
import saveOptimized from "../lib/imageProcessing";
export default function Home(props) {
 
  console.log(props);
  return (<div>
 
    <div className='md:flex mb-4 bg-white rounded-lg p-24 justify-center'>


    <div class="">
    <div class="" style={{width:"500px"} }>
     { <ShowImage props={props.imageUrl}></ShowImage>
     }
   {// <img src={"/images/" +props.imageUrl +".jpeg"}></img>
    } </div>
   <div className='text-center md:text-left'>
        <h2 className='text-lg'>Jake</h2>
        <div className='text-purple-500'>JavaScript sure is fun</div>
        <div className='text-gray-600'>Twitter: @blah</div>
        <div className='text-gray-600'>www.blahblah.com</div>
      </div>
    </div></div></div>
  );}

export async function getStaticProps({ preview = null }) {
  //<footer><GenericFooter></GenericFooter></footer>
  //   <img src={require('../public/images/'  + props.imageUrl.replace("/" , "_")+".jpeg?lqip")} alt="lovely avatar" class="object-cover object-center w-full h-full visible group-hover:hidden" />
  var fileNameMine = await saveOptimized();
  return {
       props: {  imageUrl: fileNameMine },
  }
}