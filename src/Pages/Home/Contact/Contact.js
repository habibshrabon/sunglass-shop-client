import React from "react";
import { BsTelephoneForward } from "react-icons/bs";
import { ImOffice } from "react-icons/im";
import { GrLocation } from "react-icons/gr";
import { Container } from "react-bootstrap";
import "./Contact.css";
import useAuth from "../../../hooks/useAuth";

const Contact = () => {
  const { user } = useAuth();
  return (
    <section className="p-3 pb-5 contact-from">
      <Container>
        <h1 className="py-5">Contact Us</h1>
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-3 p-2">
                <p className="advertise-icon justify-content-center d-flex align-items-center">
                  <ImOffice />
                </p>
              </div>
              <div className="col-md-9">
                <p>
                  <strong>Office location –</strong> our shops are located in
                  the heart of the city. You can easily reach us by metro or by
                  land transport.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 p-2">
                <p className="advertise-icon justify-content-center d-flex align-items-center">
                  <BsTelephoneForward />
                </p>
              </div>
              <div className="col-md-9">
                <p>
                  <strong>Monday to Friday:</strong> 9:00 AM to 6:00 PM
                </p>
                <p>
                  <strong>Saturday:</strong> 9:00 AM to 5:00 PM
                </p>
                <p>
                  <strong>Sunday:</strong> Closed
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 p-2">
                <p className="advertise-icon justify-content-center d-flex align-items-center">
                  <GrLocation />
                </p>
              </div>
              <div className="col-md-9">
                <p>
                  <strong>Address:</strong> 12/13 Dhanmandi Dhaka, 1214.
                </p>
                <p>
                  <strong>Phone:</strong> +88 01712334455
                </p>

                <p>
                  <strong>Email:</strong> habib@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <input
                type="text"
                className="form-control"
                name="name"
                id=""
                placeholder="Your Name"
                defaultValue={user.displayName}
              />
              <br />

              <input
                type="email"
                className="form-control"
                name="email"
                id=""
                placeholder="Your Email"
                defaultValue={user.email}
              />
              <br />
              <input
                type="text"
                className="form-control"
                name="phone"
                id=""
                placeholder="Phone Number"
              />
              <br />
              <textarea
                name="textarea"
                className="form-control"
                id=""
                cols="30"
                rows="5"
                placeholder="Massage"
              />
              <br />

              <button className=" btn btn-success px-4">SEND</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
