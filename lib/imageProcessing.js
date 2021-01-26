import fetch from 'isomorphic-unfetch'
import sharp from 'sharp'
export default async function SaveOptimized (path){
    var Baseurl= "https://images.unsplash.com"
    var urlAdds= "/photo-1601758124360-86f5a0432c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
    const decodedUrl = decodeURIComponent(Baseurl+urlAdds)
  
    // fetch our image stream
    const readStream = await fetch(decodedUrl)
  console.log("public/images/"+urlAdds.replace("/" , "_").replace(".","_").replace("?","_"))
    // handling our image processing using sharp
    const transform = sharp()
      .resize(
       500,
       500,
        { fit: 'cover' }
      )
      .jpeg({ progressive: true }).toFile("public/images/"+urlAdds.replace("/" , "_").replace(".","_").replace("?","_")+".jpeg", function(err){});
  
   
  
    // final response
    readStream.body.pipe(transform)
    return urlAdds.replace("/" , "_").replace(".","_").replace("?","_");
} 