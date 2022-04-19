const Data = (props) => {
    return (
        <div className="container">
            <div className="row justify-content-center row-cols-auto my-3">
                <div className="col">
                    <div className="card">
                        <div className="card-body text-center">
                            <h2 className="card-title">Create Account</h2>
                            <form className="row g-3 my-3">
                                <div className="col-12">
                                    <div className="form-floating mb-3">
                                        <input id="username" className="form-control" type="text" placeholder="e.g. 120" />
                                        <label htmlFor="username">Username</label>
                                        <div id="depositHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input id="email" className="form-control" type="email" placeholder="e.g. 120" />
                                        <label htmlFor="email">Email</label>
                                        <div id="depositHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input id="password" className="form-control" type="password" placeholder="e.g. 120" />
                                        <label htmlFor="password">Password</label>
                                        <div id="depositHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Data;