import { Formik, Field, Form } from 'formik';
import Head from 'next/head';
import Link from 'next/link';

export default function Login() {
    return (
        <>
            <Head>
                <title>LogIn Page</title>

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
                            <h3 className="title-style">LogIn</h3>
                        </div>
                        <div className="row login-block">
                            <div className="col-md-6 login-center">
                                <Form action="@{/login}" method="post" className="signin-form">
                                    <div className="col-md-8 login-center input-grids">

                                        <Field name="username" id="username" placeholder="Username"
                                            className="login-input" />
                                        <Field type="password" name="password" id="password" placeholder="Password"
                                            className="login-input" />
                                    </div>
                                    <div className="col-md-8 login-center text-start">
                                        <button type="submit" className="btn btn-style btn-style-3 text-left">Log In</button>
                                        <Link href="/individual/register" className="new-user text-right">New User ?</Link>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </Formik>
        </>
    )
}