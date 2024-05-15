import { FC, useState } from "react";

type Photo = {
  src: string;
  display: boolean;
};

type PhotoCardProps = {
  photo: Photo;
  handleDeleteClick: () => void;
};

const PhotoCard: FC<PhotoCardProps> = ({ photo, handleDeleteClick }) => (
  <div>
    <img src={photo.src} alt={photo.src} />
    <button onClick={handleDeleteClick}>delete</button>
  </div>
);

export const ControlSyntax_3 = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const handleDeleteClick = () => {
    setPhotos(photos.filter((p) => p.display));
  };

  return (
    <div>
      <h3>List</h3>
      <div>
        {photos.map((p) => (
          <PhotoCard photo={p} handleDeleteClick={handleDeleteClick} />
        ))}
      </div>
    </div>
  );
};
