import React, { useState, useEffect } from "react";

function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    fetch("https://mock-json-api.vercel.app/gallery")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);

  const getImg = (image) => {
    setPopUp(!popUp);
    setId(image);
  };

  return (
    <div className="nav-mar">
      <div className="gallery">
        <div className="row">
          {gallery.map((index, key) => (
            <div
              key={key}
              onClick={() => getImg(index.image)}
              className="col-6 col-sm-4 col-lg-2 gallery-img"
            >
              <div className="gallery-overlay">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <img src={index.image} alt="" />
            </div>
          ))}
        </div>
        {popUp && (
          <div className="popup">
            <div className="popoverlay">
              <div className="popitem">
                <div className="col-12 bg-dark d-flex justify-content-end">
                  <div className="popclose">
                    <button
                      className="close-btn"
                      onClick={() => setPopUp(!popUp)}
                    >
                      X
                    </button>
                  </div>
                </div>
                <div className="popimg">
                  <img src={id} alt="" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
