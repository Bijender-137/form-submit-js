import React, { useState } from "react";
import { Container } from "react-bootstrap";
const TrialForm = () => {
  const [myStore, setStore] = useState({
    Name: "",
    Email: "",
    Contact: "",
    Password: "",
  });
  const Changing = (e) => {
    const myName = e.target.name;
    const value = e.target.value;
    setStore({ ...myStore, [myName]: value});
  };
  const Formsubmit = (i) => {
    i.preventDefault();
    setStore({ Name: "", Email: "", Contact: "", Password: ""});
    // console.log(myStore);
  
  };
  const [show, setShow] = useState(false);
  const toggleField = () => {
    setShow(!show);
  };
  return ( 
    <>
      <section>
        <Container>
          <div className="pt-5">
            <form onSubmit={Formsubmit} action="">
              <div>
                <label htmlFor="myName">Name</label>
                <input
                  required
                  className="ms-4 w-50 py-3"
                  onChange={Changing}
                  type="text"
                  name="Name"
                  value={myStore.Name}
                />
              </div>
              <div className="mt-5">
                <label htmlFor="Email">Email</label>
                <input
                  required
                  className="ms-4 w-50 py-3"
                  onChange={Changing}
                  type="email"
                  name="Email"
                  value={myStore.Email}
                />
              </div>
              <div className="mt-5">
                <label htmlFor="Contact">Contact</label>
                <input
                  required
                  className="ms-4 w-50 py-3"
                  onChange={Changing}
                  type="number"
                  name="Contact"
                  value={myStore.Contact}
                />
              </div>
              <div className="mt-5">
                <label htmlFor="Password">Password</label>
                <input
                  required
                  className="ms-4 w-50 py-3"
                  onChange={Changing}
                  type={show === false ? "password" : "text"}
                  name="Password"
                  value={myStore.Password}/>
                <span onClick={toggleField}>show</span>
              </div>
              <div className="mt-5 ms-5 ps-3">
                <button type="submit" className="py-2 px-4 ">
                  submit
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};
export default TrialForm;
