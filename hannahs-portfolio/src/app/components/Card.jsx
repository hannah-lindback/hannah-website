import { useRef, useState } from "react";
import { Divider, Tooltip, ImageList, ImageListItem, Modal, Box } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 800,
  bgcolor: "black",
  boxShadow: 24,
  p: 0,
  outline: "none",
  border: "2px solid white",
};

const Card = ({ img, title, description, responsibilities = [], icons = [], images = [], link = []}) => {
  const videoRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col p-4 gap-8 lg:flex-col items-center justify-center text-white">
      <div className="w-full flex flex-col sm:flex-row items-stretch">
        {/* Video Section */}
        <div className="flex flex-col w-full sm:w-1/2">
          <a
            className="flex bg-black rounded hover:shadow-lg transition-shadow duration-300 group h-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <video
              ref={videoRef}
              src={img}
              muted
              playsInline
              className="object-cover opacity-75 transition-opacity group-hover:opacity-100 h-full"
              alt={title}
              loop
            />
          </a>
        </div>

        {/* Content Section */}
        <div className="flex flex-col bg-rose-500 rounded-r-lg w-full sm:w-1/2 p-4 gap-4 text-black h-full">
          <h2 className="text-7xl font-bold mt-4 p-4 font-caveat">{title}</h2>
          <Divider className="w-full bg-black" />
          <p className="font-mono">{description}</p>

          {/* Icons Section */}
          <div className="flex flex-row items-center justify-center gap-2 text-black font-mono">
            <p>Made with:</p>
            {icons.map((icon, index) => (
              <Tooltip key={index} title={icon.alt} arrow placement="bottom">
                <img
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                  className="w-8 h-8 m-2 text-black hover:scale-110 transition-transform duration-300"
                />
              </Tooltip>
            ))}
            
          </div>
          

          {/* Responsibilities Section */}
          <div className="flex flex-col items-center justify-center gap-2 text-black font-mono bg-rose-400 p-2 rounded-lg">
            <p className="underline text-2xl">Responsibilities:</p>
            <ul className="list-disc list-inside flex flex-col items-start justify-center gap-5">
              {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {link.map((link, index) => (
          <a key={index} href={link.src} className="hover:text-white">{link.alt}</a>
          ))}
        </div>
        
      </div>

      {/* ImageList Section */}
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-4xl font-mono text-black">Gallery</p>
        <ImageList className="overflow-hidden" >
          {images.map((img, index) => (
            <ImageListItem
              key={index}
              onClick={() => handleOpenModal(img.src)}
              className="relative cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="rounded-lg"
              />
              {/* Overlay Icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 hover:opacity-80 transition-opacity">
                <OpenInNewIcon className="text-white" fontSize="large" />
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      {/* Modal for Viewing Images */}
      <Modal open={open} onClose={handleCloseModal} aria-labelledby="image-modal-title">
        <Box sx={modalStyle}>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-lg"
            />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Card;