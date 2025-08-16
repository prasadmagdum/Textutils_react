import React from 'react';
export default function About(props) {
  // Style based on mode
  const myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    padding: "15px",
    borderRadius: "8px",
    transition: "all 0.3s ease-in-out"
  };
  return (
    <div className="container my-4" style={myStyle}>
      <h1 className="mb-3">About TextUtils</h1>

      <div className="accordion" id="accordionExample">

        {/* Accordion Item 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>TextUtils helps you analyze your text quickly and efficiently.</strong>  
              You can count words, characters, remove extra spaces, convert to uppercase or lowercase, and more.  
              It's a handy tool for improving your writing or checking content.
            </div>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>TextUtils is completely free to use.</strong>  
              There is no cost or subscription required. Whether you're a student, teacher, or content creator,  
              you can use it anytime without any charges.
            </div>
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>TextUtils works in all modern web browsers.</strong>  
              You can use it on Chrome, Firefox, Edge, Safari, and more.  
              There's no need to install anything — just open the app in your browser and start using it.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
