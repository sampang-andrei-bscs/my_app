import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import { deleteImage, getImage } from "~/server/queries";

export default async function FullPageImageView(props: {photoId: String}) {
    const idAsNumber = Number(props.photoId);
   if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo ID");
   const image = await getImage(idAsNumber);

    const UploaderInfo = await (await clerkClient()).
    users.getUser(image.userId)

    return(
        <div className="flex h-full w-full min-w-0">
        <div className="flex items-center justify-center">
        <img src= {image.url} alt={image.name} className="h-4/5 w-auto flex-shrink object-contain "/>
        </div>
        <div className="flex flex-shrink-0 grow flex-col border-1">
            <div className="border-b p-2 text-center text-lg">{image.name}</div>
            <div className="flex flex-col p-2">
                <span>Uploaded By:</span>
                <span>{UploaderInfo.fullName}</span>
            </div>
            <div className="flex flex-col p-2">
            <span>Created At:</span>
                <span>{new Date(image.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="p-2">
                <form action={
                    async () => {
                        "use server"
                        await deleteImage(idAsNumber);
                    }
                }>
                    <Button type="submit" variant={"destructive"}>Delete</Button>
                </form>
            </div>
        </div>
        </div>
    );
}