import { getImage } from "~/server/queries";
import { Modal } from "./modal";
import FullPageImageView from "~/app/components/full-image-page";

export default async function PhotoModal({
    params,
}:{
    params: {
        id: string;
    };
}) {
    const photoId = (await params).id;

   return(
//    <div>
//     <img src={image.url} alt={image.name} className="w-96"/> 
//    <FullPageImageView id={idAsNumber}/>
//    </div>
<Modal>
{/* <img src={image.url} alt={image.name} className="w-96"/>  */}
<FullPageImageView photoId={photoId}/>
</Modal>
    
   );
}