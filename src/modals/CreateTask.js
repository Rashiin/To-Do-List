import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function CreateTask({ modal, toggle , save }) {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handelChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        if (name === "taskName") {
            setTaskName(value)
        }
        else {
            setDescription(value)
        }
    }
    const handelSave = () => {
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        save(taskObj)
    }
    return (
      
    <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>Create  new Task</ModalHeader>
    <ModalBody>
    <form>
                    <div className='form-group'>
                        <label>Task subject</label>
                        <input type='text' className='form-control' value={taskName}onChange={handelChange} name='taskName'></input>
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                         <textarea rows="5" className='form-control' value={description} onChange={handelChange} name='description'></textarea>
                    </div>
    </form>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={handelSave}>
        Create
      </Button>{' '}
      <Button color="secondary" onClick={toggle}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
  )
}

export default CreateTask
