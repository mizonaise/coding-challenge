import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-inner">
        <h2>GET IN TOUCH</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <form className="contact-form">
          <h4>Contact Form</h4>
          <div className="user-info">
            <div className="cfield">
              <label>
                Name<span>*</span>
              </label>
              <input type="text" name="name" required></input>
            </div>
            <div className="cfield">
              <label>
                Email Address<span>*</span>
              </label>
              <input type="email" name="email" required></input>
            </div>
          </div>
          <div className="cfield">
            <label>
              Message<span>*</span>
            </label>
            <textarea name="subject" required></textarea>
          </div>
          <button className="btn-submit" type="submit" value="Clear">
            {"Send"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
