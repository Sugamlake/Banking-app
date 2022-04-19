const Home = (props) => {
    return (
        <div className="container">
            <div className="row justify-content-center row-cols-auto my-3">
                <div className="col">
                    <div className="card">
                        <div className="card-body ">
                            <img src="../../../bank-logo.png" class="card-img-top" alt="Logo" />
                            <h2 className="card-title">SUGAM Bank</h2>
                            <p class="card-text">Welcome to SUGAM Bank!</p>
                            <p class="card-text">The place where your money is safe and ready for you to use.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;