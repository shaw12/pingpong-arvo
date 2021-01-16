import React, { useContext } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { TrackContext } from '../TrackContext';

function Details() {

    const { names, setNames } = useContext(TrackContext)

    const history = useHistory()
    console.log("cccc", names)

    return (
        <>
            <Formik
            initialValues={{ playerOne: '', playerTwo: '' }}
            validationSchema={Yup.object({
                playerOne: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
                playerTwo: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
                
            })}
            onSubmit={(values) => {
                console.log(values)
                
                setNames(values)
                
                history.push('/track')
            }}
            
            >
                <Form  className="form">
                    <header>
                        Enter the Names
                    </header>

                    <label htmlFor="playerOne">Player 1 Name</label>
                    <Field name="playerOne" type="text" className="input" />
                    <ErrorMessage name="playerOne" className="error" />
                    
                    <label htmlFor="playerTwo">Player 2 Name</label>
                    <Field name="playerTwo" type="text" className="input"/>
                    <ErrorMessage name="playerTwo" className="error" />
                    
                    <button type="submit">Continue</button>
                </Form>
            </Formik>
        </>
    )
}

export default Details
