import { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useRouter } from "next/router";
import { branchPlacement } from "../utils/constants";

const KitGallery = (props) => {
  const [images, setImages] = useState([]);
  const router = useRouter();
  const apiRoute = `${process.env.NEXT_PUBLIC_API_ROOT}/gallery/`;

  useEffect(() => {
    const getDepartmentImages = async () => {
      const imageResp = await fetch(`${apiRoute}?department=${encodeURIComponent(router.query?.activeTab ?? '')}`);
      const imageJson = await imageResp.json();
      setImages(imageJson.map((imageData) => ({ src: imageData.fileUrl })));
    };

    getDepartmentImages();
  }, [router.query]);

  return (
    <DefaultLayout>
      <div>
        <select
          onChange={(event) =>
            router.push({...router, query: {...router.query, activeTab: event.target.value}}, undefined, {shallow: true})
          }
        >
          <option value="" disabled hidden>
            -------------
          </option>
          {branchPlacement.map((dep) => (
            <option
              value={dep.Branch}
              selected={router.query === dep.Branch}
            >
              {dep.Branch}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap  ">
        {images.map((image) => (
          <div className="max-w-[400px] max-h-[600px]">
            <img
              src={image.src}
              className="w-full object-cover"
              alt={image.src}
            />
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
};

KitGallery.propTypes = {};

export default KitGallery;
