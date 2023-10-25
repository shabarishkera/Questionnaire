import React from 'react'

export default function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Questionire<span className="badge bg-primary">Q</span></a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-content">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                           
                            <li className="nav-item">
                                <a className="nav-link" href="#topics">topics</a>
                            </li>
                            <li className="nav-item dropdown dropdown-mega position-static">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">About</a>
                                <div className="dropdown-menu shadow">
                                    <div className="mega-content px-4">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-12 col-sm-4 col-md-3 py-4">
                                                    <h5>Features</h5>
                                                    <div className="list-group">
                                                        <ul>
                                                       <li className='list-item'>Choose from 10+ categories.</li>
                                                       <li className='list-item'>Answer 30 questions from the selected category.</li>
                                                       <li className='list-item'>Interactive and user-friendly interface.</li>
                                                       <li className='list-item'>Real-time feedback on your quiz performance.</li>
                                                      
                                                       </ul>
                                                       
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4 col-md-3 py-4">
                                                    <h5>Boost Your Knowledge</h5>
                                                    <div className="card">
                                                        <img src={require('./Q.png')} className="img-fluid tada" alt="image" />
                                                        <div className="card-body">
                                                            <p className="card-text">A React-based quiz application that allows users to answer 30 questions from a variety of categories using the Trivia API. Users can choose from 10+ categories to customize their quiz experience.
</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4 col-md-3 py-4">
                                                <div className="container">
	<div className="row">
		<div className="container">
	<div className="row">
	<a href="#" className="intro-banner-vdo-play-btn pinkBg" target="_blank">
<i className="glyphicon glyphicon-play whiteText" aria-hidden="true"></i>
<span className="ripple pinkBg"></span>
<span className="ripple pinkBg"></span>
<span className="ripple pinkBg"></span>
</a>
	</div>
</div>

</div>
</div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-3 py-4">
                                                    <h5>Links</h5>
                                                    <div className="list-group">
                                                        <a className="list-group-item" href="#">Home</a>
                                                        <a className="list-group-item" href="#topics">Topics</a>
                                                        <a className="list-group-item" href="#">About</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>
                        <form className="d-flex ms-auto">
                            <div className="input-group">
                                <input className="form-control border-0 mr-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-primary border-0" type="submit">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
