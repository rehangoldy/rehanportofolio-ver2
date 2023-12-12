import React from "react";

const Experience = () => {
    return (
        <>  
            <h1 className="text-center text-hijau fw-bold" style={{marginTop: '200px'}}>My Experience</h1>
            <div className="container py-5 timeline position-relative mb-5">
                <div className="timeline-item w-100 mb-4 py-4 text-dark lc-block">
                    <div className="timeline-img"></div>
                    <div className="timeline-content">
                        <p editable="inline" className="lead">Step Date</p>
                        <h2 editable="inline" className="fw-bold rfs-12">Step Name</h2>
                        <div editable="rich">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam metus, lobortis non augue at, placerat viverra risus.</p>
                        </div>
                    </div>
                </div>
                <div className="timeline-item w-100 mb-4 py-4 text-dark lc-block">
                    <div className="timeline-img"></div>
                    <div className="timeline-content">
                        <p editable="inline" className="lead">Step Date</p>
                        <h2 editable="inline" className="fw-bold rfs-12">Step Name</h2>
                        <div editable="rich">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam metus, lobortis non augue at, placerat viverra risus.</p>
                        </div>
                    </div>
                </div>
                <div className="timeline-item w-100 mb-4 py-4 text-dark lc-block">
                    <div className="timeline-img"></div>
                    <div className="timeline-content">
                        <p editable="inline" className="lead">Step Date</p>
                        <h2 editable="inline" className="fw-bold rfs-12">Step Name</h2>
                        <div editable="rich">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam metus, lobortis non augue at, placerat viverra risus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience;