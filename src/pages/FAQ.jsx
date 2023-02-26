import React, { useEffect } from "react";
import wallpaper from "../assets/images/faqwp.jpg";
import Social from "../components/Social";
import faqimg from "../assets/images/faqimg.jpg";
import Aos from "aos";

function FAQ() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="nav-mar">
      <div className="container">
        <div className="faq-wp">
          <img src={wallpaper} alt="wp" />
        </div>
        <div className="sec-header mt-3 mb-5">
          <h2>
            For <span>Answers</span> and <span>Questions</span>
          </h2>
        </div>
        <div className="faq-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis
            animi voluptates temporibus commodi nemo cumque eos explicabo, ipsum
            culpa? Consectetur odio doloribus dolor, tempora dolore iusto modi
            repellendus inventore ad obcaecati numquam ratione sint dicta quo
            quisquam fugiat qui autem provident adipisci eligendi ipsum
            similique magnam! Atque doloribus, officiis nisi maxime, nemo
            exercitationem autem quisquam saepe debitis vero repellendus magnam
            unde neque?
            <span>Reiciendis molestias fuga suscipit dolores</span>. Autem quas
            est esse asperiores voluptatem odio reprehenderit placeat ratione,
            quibusdam culpa similique minima officia dolores pariatur veniam ut
            fugiat nesciunt ducimus error? Perferendis, voluptatum! Ipsam,
            reiciendis sequi eos minus ad soluta inventore similique! Reiciendis
            officia voluptatibus voluptatum necessitatibus expedita, enim dolore
            tempora eos aliquam modi quos tempore sint magnam doloribus
            quibusdam maxime ut accusamus. Nihil nulla unde hic similique
            delectus fuga accusamus vitae consequuntur provident laboriosam
            accusantium voluptatibus quas, magni sed amet! Harum assumenda
            ducimus veritatis blanditiis aspernatur voluptatibus temporibus
            dolor.
          </p>
        </div>
        <Social />
        <div className="faq-text">
          <p>
            Purus non enim praesent elementum facilisis. Neque vitae tempus quam
            pellentesque. Facilisis mauris sit amet massa vitae tortor lorem sit
            lacinia. Rhoncus dolor purus non enim praesent elementum facilisis
            leo. Quisque non tellus orci ac auctor augue mauris. Lobortis mattis
            aliquam faucibus purus. Cras pulvinar mattis nunc sed blandit libero
            volutpat. Amet porttitor eget dolor morbi non arcu risus.{" "}
            <span>
              Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra.
              Molestie at elementum eu facilisis sed.
            </span>{" "}
            In aliquam sem fringilla ut morbi. Ut placerat orci nulla
            pellentesque dignissim enim sit amet venenatis. Lacus sed turpis.
          </p>
        </div>
        <div className="faq-supports">
          <div className="col-12">
            <div className="row">
              <div
                data-aos="fade-right"
                className="fq col-4 d-flex justify-content-center align-items-center flex-column"
              >
                <div className="faq-support">
                  <div className="faq-item">
                    <i className="fa-solid fa-gamepad"></i>
                  </div>
                </div>
                <h2>BEST GAMES</h2>
                <p>
                  Cras finibus sollicitudin ligula, non maximus purus imperdiet
                  vitae. Curabitur ac facilisis elit potenti. Integer aliquet
                  lorem augue id aliquam velit.
                </p>
              </div>
              <div className="fq col-4 d-flex justify-content-center align-items-center flex-column">
                <div className="faq-support">
                  <div className="faq-item">
                    <i className="fa-solid fa-shield-cat"></i>
                  </div>
                </div>
                <h2>SUPPORT</h2>
                <p>
                  Cras finibus sollicitudin ligula, non maximus purus imperdiet
                  vitae. Curabitur ac facilisis elit potenti. Integer aliquet
                  lorem augue id aliquam velit.
                </p>
              </div>
              <div
                data-aos="fade-left"
                className="fq col-4 d-flex justify-content-center align-items-center flex-column"
              >
                <div className="faq-support">
                  <div className="faq-item">
                    <i className="fa-solid fa-rocket"></i>
                  </div>
                </div>
                <h2>MOBILE APPS</h2>
                <p>
                  Cras finibus sollicitudin ligula, non maximus purus imperdiet
                  vitae. Curabitur ac facilisis elit potenti. Integer aliquet
                  lorem augue id aliquam velit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="sec-header">
          <h2>Supports</h2>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="faq-text">
                <p>
                  Purus non enim praesent elementum facilisis. Neque vitae
                  tempus quam <span>pellentesque</span>. Facilisis mauris sit
                  amet massa vitae tortor lorem sit lacinia. Rhoncus dolor purus
                  non enim praesent elementum facilisis leo. Quisque non tellus
                  orci ac auctor augue mauris. Lobortis{" "}
                  <span>mattis aliquam</span> faucibus purus. Cras pulvinar
                  mattis nunc sed blandit libero volutpat. Amet porttitor eget
                  dolor morbi non arcu risus. Proin sagittis nisl rhoncus mattis
                  rhoncus urna neque viverra. Molestie at <span>elementum</span>{" "}
                  eu facilisis sed. In aliquam sem fringilla ut morbi. Ut
                  placerat orci nulla pellentesque dignissim enim sit amet
                  venenatis. Lacus sed turpis tincidunt id aliquet risus feugiat
                  in.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="faq-img">
                <img src={faqimg} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
