import React, { Component } from "react";
import { storage } from "./Index";
import placeholder from './placeholder.png'

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: ""
      //   progress: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = () => {
    //('images/FileName')
    const { image } = this.state;
    if (image != null) {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                //progress function
                // const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                // this.setState({progress});
            },
            error => {
                //error function
                console.log(error);
            },
            () => {
                //complete function
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    console.log(url);
                    this.setState({ url });
                });
            }
        );
    } else {
        alert('Please select a file to upload.')
    }
  };

  render() {
    const style = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    };
    const button = {
      duration: "0.4s"
    };
    return (
      <div style={style}>
        {/* <progress value={this.state.progress} max="100"/> */}
        <input class="file" type="file" onChange={this.handleChange} />
        <button className="btn btn-outline-primary" onClick={this.handleUpload}>
          Upload
        </button>
        <br />
        <img
          src={placeholder}
          alt="Uploaded Images"
          height="300"
        />
      </div>
    );
  }
}

export default FileUpload;