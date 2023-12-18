import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiPhp, SiNextdotjs, SiTailwindcss, SiExpress } from "react-icons/si";
import { FaReact, FaVuejs, FaBootstrap, FaLaravel, FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { AiOutlineAntDesign } from "react-icons/ai";


const Skill = () => {
    return (
        <>
            <h1 className="text-center text-hijau fw-bold">Technologies and Skill</h1>
            <div className="d-flex justify-content-center align-item-center  mt-5" style={{ marginBottom: '60px' }}>
                <div className="row gap-2">
                    <div className="col">
                        <button className="btn btn-outline-secondary" >
                            <IoLogoJavascript style={{ width: '50px', height: '50px' }} />
                        </button>
                    </div>

                    <div className="col">
                        <button className="btn btn-outline-secondary"><SiTypescript style={{ width: '50px', height: '50px' }} /></button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-secondary"><SiPhp style={{ width: '50px', height: '50px' }} /></button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-secondary"><GrMysql style={{ width: '50px', height: '50px' }} /></button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-secondary"><FaReact style={{ width: '50px', height: '50px' }} /></button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-secondary"><SiNextdotjs style={{ width: '50px', height: '50px' }} /></button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-secondary"><FaVuejs style={{ width: '50px', height: '50px' }} /></button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-secondary"><FaBootstrap style={{ width: '50px', height: '50px' }} /></button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-secondary"><AiOutlineAntDesign style={{ width: '50px', height: '50px' }} /></button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-secondary"><SiTailwindcss style={{ width: '50px', height: '50px' }} /></button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-secondary"><FaLaravel style={{ width: '50px', height: '50px' }} /></button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-secondary"><FaNodeJs style={{ width: '50px', height: '50px' }} /></button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-secondary"><SiExpress style={{ width: '50px', height: '50px' }} /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill;