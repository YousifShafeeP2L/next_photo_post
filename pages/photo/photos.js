import Image from "next/image";

export default function Photos({ images, status }) {
    const imageView = images.map((image) => {
        if (image.status === status) {
            return <div className="col-lg-2 col-md-4">
                <div className="coursecard-single">
                    <div className="thumbnail">
                        <Image className="img-thumbnail" src={"/../public/images/" + image.name} width={1000} height={1000} alt={image.description} />
                    </div>
                    <div className="mb-4 mt-3">
                        <p className="text-center" >{image.description}</p>
                    </div>
                </div>
            </div>
        }
    });

    return (
        <>
            <div className="row justify-content-center" style={{ padding: "100px 0" }}>
                {imageView}
            </div>
        </>
    )
}

