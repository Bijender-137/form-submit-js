import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Form = () => {
  const [myData, setData] = useState({
    Name: "",
  });
  const userInput = (e) => {
    const myName = e.target.name;
    const value = e.target.value;
    setData({ ...myData, [myName]: value });
  };
  const Formsubmission = (i) => {
    i.preventDefault();
    setData({ Name: "" });
    console.log(myData);
    alert("Submit Successfully");
  };

  return (
    <>
      <section>
        <Container>
          <div>
            <form onSubmit={Formsubmission} action="">
              <label htmlFor="myname">Name</label>
              <input
                onChange={userInput}
                type="text"
                name="Name"
                value={myData.name}
              />
              <br />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Form;
