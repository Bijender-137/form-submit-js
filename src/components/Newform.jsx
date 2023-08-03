import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Newform = () => {
  const [myData, setData] = useState({ Name: "", Email: "", Password: "" });
  const Changing = (p) => {
    const Name = p.target.name;
    const value = p.target.value;
    // const {Name, value } = p.target;
    setData({ ...myData, [Name]: value });
  };
  const Formsubmit = (x) => {
    x.preventDefault();
    setData({ Name: "", Email: "", Password: "" });
    // console.log(myData);
  };
  const [show, setShow] = useState(false);
  const toggleField = () => {
    setShow(!show);
  };
  return (
    <>
      <section className="p-5">
        <Container>
          <form  className="d-flex flex-column" onSubmit={Formsubmit}>
            <div>
              <input
                type="text"
                placeholder="Name"
                name="Name"
                onChange={Changing}
                value={myData.Name}
              />
            </div>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Email"
                name="Email"
                onChange={Changing}
                value={myData.Email}
              />
            </div>
            <div className="mt-4">
              <input
                type={show === false ? "password" : "text"}
                placeholder="Password"
                name="Password"
                onChange={Changing}
                value={myData.Password}
              />
              <span className="ms-2" onClick={toggleField}>show</span>
            </div>
            <div className="mt-4"><button type="submit">submit</button></div>
          </form>
        </Container>
      </section>
    </>
  );
};

export default Newform;
