import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const Contact = () => {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        setValidated(email && subject && message);
    }, [email, subject, message]);

    return (
        <div className='contact-main-div'>
            <div className='content-div'>
                <h3 className='contact-header-h3'>Contact Sky & Jack!</h3>
                <form>
                    <h4 className='contact-header-h4'>Contact Form</h4>
                    <Divider className='divider' />
                    <TextField 
                        className='contact-input'
                        label='Email'
                        type='email'
                        onChange={newEmail => setEmail(newEmail.target.value)} 
                    />
                    <TextField 
                        className='contact-input'
                        label='Subject'
                        onChange={newSubject => setSubject(newSubject.target.value)} 
                    />
                    <TextareaAutosize 
                        className='contact-textarea'
                        placeholder='Your message...'
                        rowsMin={5}
                        rowsMax={10}
                        onChange={newMessage => setMessage(newMessage.target.value)} 
                    />
                    <Divider className='divider' />
                    <Button className='btn'>
                        Submit Message
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Contact;