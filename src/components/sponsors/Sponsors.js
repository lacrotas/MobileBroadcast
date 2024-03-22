import "./Sponsors.scss";
import ModalWindow from "../../custom/modalWindow/ModalWindow";
import { useState, useEffect } from "react";
import { fetchAllSponsorPanel } from "../../http/sponsorPanelApi";

function Sponsors() {
  const [isClose, setIsClose] = useState(false);
  const [allSponsors, setAllSponsors] = useState([]);

  useEffect(() => {
    fetchAllSponsorPanel().then(data => setAllSponsors(data));
  }, [])

  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }
  return (
    <section className="sponsors">
      {allSponsors.length != 0 ?
        <div className="sponsors_grid">
          <div className="sponsor_images_container">
            {allSponsors.map((item, index) =>
              <a target="blank" href={isValidUrl() ? item.link : ""} >
                <img className="sponsor_image" key={index} src={process.env.REACT_APP_API_URL + item.image} alt="logo" />
              </a>
            )}
          </div>
          <div className="sponsord_add_container">
            <h3 className="sponsors_label h3_text">Спонсоры</h3>
            <p className="sponsors_pagragraph paragraph_text">Если вы хотите стать спонсором сообщества, свяжитесь с нами, мы обсудим детали. </p>
            <button className="sponsors_button button" onClick={() => setIsClose(true)}>Оставить заявление</button>
          </div>
        </div>
        :
        <>
          <h3 className="sponsors_label h3_text">Спонсоры</h3>
          <p className="sponsors_pagragraph paragraph_text">Если вы хотите стать спонсором сообщества, свяжитесь с нами, мы обсудим детали. </p>
          <button className="sponsors_button button" onClick={() => setIsClose(true)}>Оставить заявление</button>
        </>
      }
      {isClose &&
        <ModalWindow type={'addSponsor'} closeModal={setIsClose} />
      }
    </section>
  );
}

export default Sponsors;
