import { Form, Formik } from "formik";
import Head from "next/head";

export default function Register() {
    return (
        <>
            <Head>
                <title>Register Page</title>
            </Head>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}

                onSubmit={() => {

                }}
            >
                <div className="w3l-contact py-5" id="contact">
                    <div className="container py-md-5 py-4">
                        <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: "500px" }}>
                            <h3 className="title-style">Registration Form</h3>
                        </div>
                        <div className="row login-block">
                            <div className="col-md-7 login-center">
                                <ul>
                                </ul>
                                <Form method="post" className="signin-form">
                                    <div className="input-grids">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <input type="text" field="firstName" placeholder="First Name"
                                                    className="contact-input" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" field="lastName" placeholder="Last Name"
                                                    className="contact-input" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <input type="text" field="email" placeholder="Email"
                                                    className="contact-input" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" field="confirmEmail" placeholder="Confirm Email"
                                                    className="contact-input" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <input type="password" field="pwd" placeholder="Password"
                                                    className="contact-input" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="password" field="confirmPwd" placeholder="Confirm Password"
                                                    className="contact-input" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-3 login-center text-start">
                                        <button className="btn btn-style btn-style-3">Register</button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>

            </Formik>
        </>
    );
}