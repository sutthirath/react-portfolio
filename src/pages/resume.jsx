import React from "react";
import "./resume.css";
import pdf from "../images/resume.pdf";

class Resume extends React.Component {
  handlePrint = () => {
    var myWindow = window.open("", "Resume", "width=800, height=600");
    myWindow.document.write(`<iframe
      src="https://docs.google.com/document/d/e/2PACX-1vShfItfp3NVP7l9vHCe9n6KhorFeGihxKYq6lDLroTZphAyXR3hPdSD30mch8HuibvN-BL1YgFGSlz_/pub?embedded=true",
      width="1000" height="1000" frameBorder="0"
    />`);
    myWindow.document.close();
    myWindow.focus();
    myWindow.print();
    myWindow.close();
  };

  render() {
    return (
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
        <span>
          <iframe
            className="doc"
            src="https://docs.google.com/document/d/e/2PACX-1vShfItfp3NVP7l9vHCe9n6KhorFeGihxKYq6lDLroTZphAyXR3hPdSD30mch8HuibvN-BL1YgFGSlz_/pub?embedded=true"
            frameBorder="1"
          />
        </span>
      </div>
    );
  }
}

export default Resume;
