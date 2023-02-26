import { useState, useEffect } from "react";
import swal from "sweetalert";
import Aos from "aos";

function Contact() {
  const [data, setData] = useState({});
  const [comments, setComments] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [check, setCheck] = useState(true);
  const [echeck, seteCheck] = useState(false);
  const [echeck2, seteCheck2] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    let email = document.getElementById("email");
    if (email.value.length === 0) {
      seteCheck2(false);
    } else {
      seteCheck2(true);
    }
    if (email.value.includes("@")) {
      seteCheck(true);
      seteCheck2(false);
    } else {
      seteCheck(false);
    }
    if (e.target.value.length < 3) {
      e.target.style.backgroundColor = "#800000";
      setCheck(false);
    } else {
      e.target.style.backgroundColor = "";
      setCheck(true);
    }
  };

  const checkInput = (e) => {
    if (e.target.value.length < 3) {
      e.target.style.backgroundColor = "#800000";
      setCheck(false);
    } else {
      e.target.style.backgroundColor = "";
      setCheck(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    if (check && echeck) {
      fetch("https://mock-json-api.vercel.app/usercomments", {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => setData(data));
      setToggle(!toggle);
      swal("Good job!", "You meow has been sent!", "success");
    } else {
      swal("Fill the blanks Correct...", "You meow couldn't sent :(", "error");
    }
  };

  useEffect(() => {
    fetch("https://mock-json-api.vercel.app/usercomments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [toggle]);

  return (
    <div className="nav-mar">
      <>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.178979858603!2d49.82203171523074!3d40.382725679369045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da6f327d463%3A0xbe68553e791e5e84!2sCoders%20Azerbaijan!5e0!3m2!1str!2s!4v1665344420960!5m2!1str!2s"
            width="600"
            height="450"
            style={({ border: "0" }, { filter: "invert(90%)" })}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="container">
          <div className="contact-info">
            <div className="contact-text">
              <div data-aos="fade-up" className="sec-header">
                <h2>
                  Don't be shy to <span>Contact Us</span>!
                </h2>
              </div>
              <form data-aos="fade-up" onSubmit={(e) => handleSubmit(e)}>
                <div className="input-area">
                  <div className={echeck2 ? "alert-email show" : "alert-email"}>
                    Your mail must contain "@"!
                  </div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    id="name"
                    data-aos="fade-right"
                    name="name"
                    onClick={(e) => checkInput(e)}
                    onChange={(e) => handleInput(e)}
                    className="inp-text"
                  />
                  <input
                    type="text"
                    placeholder="Your Email"
                    name="email"
                    data-aos="fade-left"
                    id="email"
                    className="inp-text"
                    onClick={(e) => checkInput(e)}
                    onChange={(e) => handleInput(e)}
                  />
                </div>
                <div className="input-text">
                  <textarea
                    name="text"
                    data-aos="fade-up"
                    placeholder="Your Meows..."
                    className="inp-text"
                    rows="10"
                    onChange={(e) => handleInput(e)}
                    onClick={(e) => checkInput(e)}
                  ></textarea>
                  <button className="btn-paw">Meow</button>
                </div>
              </form>
            </div>
            <div data-aos="fade-up" className="contact-loc">
              <h4>Location</h4>
              <p>Baker Street 223 B, London 423668</p>
              <h4>Phone</h4>
              <p>+1 623-812-4957</p>
              <h4>E-mail</h4>
              <p>example@mail.com</p>
            </div>
          </div>
          <div data-aos="fade-up" className="comments">
            {comments.map((index, key) => (
              <div key={key} className="user-comments">
                {index.text}
                <div className="username">-{index.name}</div>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
}

export default Contact;
