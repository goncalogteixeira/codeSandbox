import React from "react";
import ReactImageFallback from "react-image-fallback";
import { getStaticProps } from "../pages";
export default function ShowImage (props) {
 
        return (
            <div>
                <ReactImageFallback
                    src={require('../public/images/'  + props.props.replace("/" , "_")+".jpeg")}
                    fallbackImage={<img src={require('../public/images/'  + props.props.replace("/" , "_")+".jpeg?lqip")} style={{width:"100%"}}></img>}
                    initialImage={<img src={require('../public/images/'  + props.props.replace("/" , "_")+".jpeg?lqip")}  style={{width:"100%"}}></img>}
                    alt="cool image should be here"
                    className="my-image" />
            </div>
        );
    
}
export  function ImageComponent(props) {
  
  return (
 <img src={props.props}></img>
    );
}
export  function LazyImage(props) {
    return (
      
      
      <div className="image-container">
      <img className="blur-image" src={require('../public/images/'  + props.props.replace("/" , "_")+".jpeg?lqip")} />
      <img src={require('../public/images/'  + props.props.replace("/" , "_")+".jpeg")} />
      <style jsx>{`
        .image-container: {
          
        }
        .blur-image img {
          mix-blend-mode: hard-light;
          width: 100%;
          height: 100%;
        }
        img {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
    `}</style>
    
    </div>);
  }
