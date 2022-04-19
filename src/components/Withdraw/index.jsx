const Withdraw = ({ onChange, isDeposit, isValid}) => {
    const choice = ['Deposit', 'Cash Back'];
    let input;
    console.log(`ATM isDeposit: ${isDeposit}`);
    console.log(`The operation is valid: ${isValid}`)
    if (!isValid) {
      input = <input disabled className="btn btn-primary" type="submit" width="200" value="Submit" id="submit-input"></input>
    } else {
      input = <input className="btn btn-primary" type="submit" width="200" value="Submit" id="submit-input"></input>
    }
    return (
        <div className="container">
            <div className="row justify-content-center row-cols-auto my-3">
                <div className="col">
                    <div className="card">
                        <div className="card-body text-center">
                            <h2 className="card-title"> Withdraw</h2>
                            <h3 className="card-subtitle">Account Balance</h3>
                            <form className="row g-3 my-3">
                                {/* <label htmlFor="withdraw-amount" className="form-label">Amount to Withdraw</label>
                                <input name="withdraw-amount" id="withdraw-amount" className="form-control" type="number" width="200" onChange={onChange}></input>
                                {input} */}
                                <div className="col-12">
                                    <div className="form-floating mb-3">
                                        <input id="withdraw-amount" className="form-control" type="number" placeholder="e.g. 120" />
                                        <label htmlFor="withdraw-amount">Amount to Withdraw</label>
                                        <div id="depositHelp" class="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                </div>
                                <div className="col-12">{input}</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Withdraw;