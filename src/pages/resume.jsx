import React from "react";
import "./resume.css";
import pdf from "../images/resume.pdf";

class Resume extends React.Component {
  handlePrint = () => {
    var myWindow = window.open("", "Resume", "width=800, height=600");
    myWindow.document.write(`<img src="https://i.imgur.com/gCutpn5.png" />`);
    myWindow.document.close();
    myWindow.focus();
    myWindow.print();
    myWindow.close();
  };

  render() {
    return (
      <div className="Resume">
        <div>
          <div className="resume-btns">
            <button onClick={this.handlePrint} className="resume-btn">
              Print
              <i className="fas fa-print resume-i" />
            </button>
            <a href={pdf} download="SeanVilaysaneResume">
              <button className="resume-btn">
                Download
                <i className="fas fa-file-download resume-i" />
              </button>
            </a>
          </div>
        </div>
        <div className="doc-wrapper">
          <div className="doc-container">
            <img
              src="https://i.imgur.com/gCutpn5.png"
              className="doc"
              alt="resume"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
