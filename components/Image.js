import { useAmp } from 'next/amp'

export default function Image({bool:isAmp , src1 , width1, height1 , alt1}){
    {  isAmp  ?   <amp-img
        alt={alt1}
        width={width1}
        height={height1}
        layout="responsive"
        src={src1}
      >
       
      </amp-img> : <img src= {src1} width={width1} height={height1} alt={alt1}></img>
      }

return (<div></div>);
}