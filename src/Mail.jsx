
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import SubjectIcon from '@material-ui/icons/Subject';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useState } from 'react';
import axios from 'axios';
import sending from './img/sending.gif';
import './mail.css';
import { useNavigate, Link } from 'react-router-dom';



function Mail() {
  let navigate = useNavigate();
  const Form = () => {
    const [email, setEmail] = useState([])
    const [message, setMessage] = useState('')
    const [subject, setSubject] = useState('')
    const [loading, setLoading] = useState(false)
    const [tags, setTags] = useState([]);
    const handleQuillChange = (value) => { setMessage(value) }

    // Tag Code Lines

    const addTag = (e) => {
      if (e.key === " ") {
        if ((e.target.value.length > 0)) {
          setTags([...tags, e.target.value]);
          e.target.value = [];
        }
      }
    };

    // Remove Tag Lines

    const removeTag = (removedTag) => {
      const newTags = tags.filter((tag) => tag !== removedTag);
      setTags(newTags);
    };

    const handleRequest = async (e) => {
      if (email && tags && subject !== "") {
        if (message !== "") {
          e.preventDefault()
          setLoading(true)

          const body = { email, tags, message, subject }

          let payload = { email: tags, subject: subject, message: message };

          axios({
            url: 'https://bulk-mail-tool.herokuapp.com/mail',
            method: 'post',
            data: payload
          })
            .then(function (response) {
              // console.log(response);
              navigate('/mail-sent')
              // alert('Email Sent Successfully')
              setLoading(false)
              // window.location.reload()
            })
            .catch(function (error) {
              setLoading(false)
              console.log(error);
            });
        } else {
          alert('Compose Email')
        }
      }
    }
    return (

      <>
        <div className="container">
          <div className="row position-absolute top-0 start-0">
            <div class="col-sm-8 ">

              <form onSubmit={handleRequest} method="post">
                <div className="form ms-1">
                  <div className="form__wrapper">
                    <div className="animate-charcter">
                      <h4>{loading ? 'Sending...' : "Bulk Email"}</h4>
                      {
                        loading && <img
                          src={sending}
                          alt="loading..."
                          style={{
                            color: "black",
                            position: "absolute",
                            width: 320,
                            height: 320,
                            top: "50%",
                            left: "72%",
                            transform: "translate(-50%, -50%)"
                          }}
                        />

                      }
                    </div>
                    <div className="form__container">
                      <div className="form__containerItems">

                        {/* Subjects */}

                        <div class="mb-3">
                          <label class="mb-2 text-muted subject-text">Subject</label>
                          <input
                            class="style-input form-control"                            
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                            type="text"
                            placeholder="Add Subject"
                            required />
                        </div>

                        {/* Email */}

                        <div class="mb-3">
                          <label class="mb-2 text-muted email-text">E-Mail Address</label>
                          <input type="email"
                            class="style-input form-control"
                            onKeyDown={addTag}
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required={true}
                            type="email"
                            placeholder="Enter Space to Add a Email (Required)"
                            name="email"
                            required />
                        </div>

                        {/* Compose Mail */}

                        <div class="mb-3">
                          <label class="text-muted compose-text">Compose Mail</label>
                        </div>


                        <div className="container__composeMail">
                          <ReactQuill
                            id="message"
                            value={message}
                            onChange={handleQuillChange}
                            className="quill"
                            required
                            placeholder="Enter Content from here..."
                          />

                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <button disabled={loading}
                          onClick={handleRequest}
                          type="submit"
                          className="button-29"
                          role="button">Send</button>
                      </div>
                    </div>
                  </div>

                </div>
              </form>

            </div>
            <div className="col-sm-4 mt-3 ">
              <div className="tag-input position-absolute top-2 start-100">
                <ul className="tags">
                  {tags.map((tag, index) => {
                    return (
                      <li key={index} className="tag">
                        <span className="tag-title">{tag}</span>
                        <span
                          className="tag-close-icon"
                          onClick={() => removeTag(tag)}
                        >
                          x
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <input
                  id="email"
                  type="email"
                  onKeyDown={addTag}
                  placeholder="Mail ID's"
                />
              </div>
            </div>
          </div>


          <div class="row justify-content-sm-center h-100 m-3 ">

          </div>
        </div>

      </>
    )
  }

  return (
    <div className='container-fluid'>
      <>
        <Form />
      </>

    </div>
  );
}

export default Mail;