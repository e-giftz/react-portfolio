import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
// import Modal from 'react-bootstrap/Modal';

function ProjectItem(props) {
    const [show, setShow] = useState(false);
    return (
        <>
            <li  className="project__item">
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
                                <p>JavaScript</p>
                                <Button
                                    className="btns"
                                    buttonStyle="btn--primary"
                                    buttonSize="btn--large"
                                    onClick={() => setShow(true)}>
                                        Learn more

                                </Button> 
                                {/* <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal> */}
        
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
