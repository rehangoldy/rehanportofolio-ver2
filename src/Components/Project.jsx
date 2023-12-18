import { useState } from 'react'
import rehanavatar from '../Assets/Images/rehan-avatar.png'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';


const Project = (args) => {



    return (
        <div className="container mb-5">
            <h1 className="text-hijau text-center fw-bold">My Project</h1>

            <div class="container">
                <div class="row mb-4 align-items-center">
                    <div class="col-lg-6 mb-4 mb-lg-0 order-lg-1">
                        <div class="lc-block text-center">
                            <img class="img-fluid w-50" src="https://picsum.photos/id/600/2000/1000" srcset="" sizes="" width="" height="" />
                        </div>
                    </div>
                    <div class="col-lg-6 p-lg-6">
                        <div class="lc-block mb-5">
                            <div editable="rich">

                                <h2 class="display-6 fw-bold">Increase your Sales</h2>

                                <p class="lead"><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam metus.</p>
                            </div>
                        </div>

                        <button className='btn btn-lg btn-primary-costume'>Testing</button>
                    </div>
                </div>

                <div class="row mb-4 align-items-center">
                    <div class="col-lg-6 mb-4 mb-lg-0 order-lg-1">
                        <div class="lc-block text-center">
                            <img class="img-fluid w-50" src="https://picsum.photos/id/600/2000/1000" srcset="" sizes="" width="" height="" />
                        </div>
                    </div>
                    <div class="col-lg-6 p-lg-6">
                        <div class="lc-block mb-5">
                            <div editable="rich">

                                <h2 class="display-6 fw-bold">Increase your Sales</h2>

                                <p class="lead"><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam metus.</p>
                            </div>
                        </div>

                        <button className='btn btn-lg btn-primary-costume'>Testing</button>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Project