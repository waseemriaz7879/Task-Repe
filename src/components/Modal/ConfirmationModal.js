import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
export default function ConfirmationModal({
  modalShow,
  handleCloseModal,
  handleConfirmDelete,
  handleCheckBox,
}) {
  return (
    <>
      <Modal show={modalShow.isVisible} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Woohoo, you're reading this text in a modal!</p>
          <Form.Check
            onChange={handleCheckBox}
            type="checkbox"
            label="Do Not ask about this shit again"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>

          <Button
            variant="btn btn-danger"
            onClick={() => handleConfirmDelete()}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
