import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from './Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

function ProjectItem(props) {
    const [show, setShow] = useState(false);

    const history = useHistory();

    const handleRoute = () => {
      history.push("/skills");
    }

    // const url = new URL(link)
    // console.log(url)
    // if (url.hostname === HOSTNAME ) return <a target="_blank" href={link}>{link}</a>
    // else
  //   var myModal = document.getElementById('myModal')
  //   var myInput = document.getElementById('myInput')

  //   myModal.addEventListener('shown.bs.modal', function () {
  // myInput.focus()
// })
  return (
    <>
      <li className="project__item">
        <Link className="project__item__link" to={props.path}>
          <figure className="project__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="project figure"
              className="project__item__img"
            />

<div className="content">
              <div>
                <h2>Quack - The Bird Watcher App</h2>
                <p>JavaScript, Handlebars.js</p>
                <Button
                  className="btns"
                  buttonStyle="btn--primary"
                  buttonSize="btn--large"
                  onClick={() => setShow(true)}>
                  Learn more

                </Button>
                <Modal
                  // id="myModal"
                  show={show}
                  onHide={() => setShow(false)}
                  animation={true}
                  autoFocus={true}
                  // options focus ={false}
                  // dialogClassName="modal"
                  dialogClassName="modal-90w"
                  aria-labelledby="example-custom-modal-styling-title"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                      Quack - The Bird Watcher App
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {/* <div class="clearfix"> */}
                    <p className="smallfont">
                      Quack is a birdwatcher application which allows for users to view bird
                      sightings (submitted by others) in an interactive map. Users can submit their
                      own bird sightings; they can also learn more about individual birds by clicking
                      on its respective HTML cards.
                    </p>
                    {/* <div> */}
                    {/* <Button
                        className="btns"
                        buttonStyle="btn--outline"
                        buttonSize="btn--large"
                    >
                        View App
                    </Button> */}
                    {/* <div className="display-wrapper"> */}
                    {/* <strong> */}
                    {/* <a target="_blank" href={'https://github.com/BirdWatcherQuack/BirdWatcher'} rel="noreferrer">
                    
                      Click to view repo:
                    </a> */}
                    {/* </strong> */}

                    {/* </div> */}



                     
                    <Button
                        className="btns"
                        buttonStyle="btn--outline"
                        buttonSize="btn--large"
                        onClick={handleRoute}
                    >Click to view repo
                    </Button>
                    
                     
                    {/* </div> */}
                  </Modal.Body>
                </Modal>

              </div>
            </div>
          
          </figure>
          <div className="project__item__info">
            <h5 className="project__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default ProjectItem;
