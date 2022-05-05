import React from "react";


const ContactPage = () => {
  return(
  <div className="container">

  <h1>"Welcome to our contact form"</h1>
    <h2>"Contact Us"</h2>
    <form
      name="contact-form"
      method="POST"
      action="contact/?success=true"
    >
      <label htmlFor="name">Name *</label>
      <input type="text" placeholder="First Name"/>
          <input type="text" placeholder="Last Name"/>
      <label htmlFor="email">E-mail Address *</label>
      <input id="email" type="email" name="email" required />
      <label htmlFor="Country">Country*</label>
                  <select id="Country" name="Country">
                      <option value="Pakistan">Pakistan</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">Uk</option>
                      <option value="USA">USA</option>
                      <option value="UAE">UAE</option>
                    </select>
      <button type="submit">Submit</button>
    </form>
  <style jsx ContactPage>
    {`
      html,
      body {
        font-size: 18px;
        background-color: #dbd8f4;
        color: #27004e;
        padding: 1em;
        margin: 1em;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
      }
      * {
        box-sizing: border-box;
      }
      h1 {
        text-transform: uppercase;
      }
      .container {
        display: flex;
        flex-direction: column;
        width: 80%;
        grid-row-gap: 0.5em;
      }
      @media (max-width: 769px) {
        .container {
          width: 100%;
        }
      }
      label {
        font-size: 1.2em;
      }
      input[type="text"],
      input[type="email"],
      textarea {
        font-size: 24px;
      }
      button {
        max-width: 400px;
        margin: 0 auto;
        color: #f3f0ee;
        background-color: #022f94de;
        border: none;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        text-transform: uppercase;
        border-radius: 10px;
      }
      button:hover {
        background-color: #051f58de;
      }
    `}
  </style>
</div>
);
};

 
export default ContactPage;
