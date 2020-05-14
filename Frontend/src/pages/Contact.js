import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import railsServer from '../api/railsServer';
import { useDispatch } from 'react-redux';
import { handleOpen } from '../redux/actions/toastsActions';
import Spinner from '../components/Spinner';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        setValidated(email && subject && message);
    }, [email, subject, message]);

    const handleSubmit = event => {
        event.preventDefault();
        setIsLoading(true);

        railsServer.post('contact-send-email', { email_options: { date: new Date(), email, subject, message }}).then(
            () => {
                dispatch(handleOpen({ type: 'success', message: 'Message successfully sent.' }));
                setEmail('');
                setSubject('');
                setMessage('');
                setIsLoading(false);
            },
            () => dispatch(handleOpen({ type: 'error', message: 'Message sending error. Try again later.' }))
        );
    };

    return (
        <div className='contact-main-div'>
            {isLoading
            ?
            <div className='spinner-div'>
                <Spinner />
            </div>
            :
            <div className='content-div'>
                <h3 className='contact-header-h3'>Contact Sky & Jack!</h3>
                <form onSubmit={handleSubmit}>
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
                    <Button className='btn' disabled={!validated} type='submit'>
                        Submit Message
                    </Button>
                </form>
            </div>}
        </div>
    );
};

export default Contact;