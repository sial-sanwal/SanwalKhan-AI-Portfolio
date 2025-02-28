import {content} from "../Content";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import {AiFillGithub, AiOutlineLink} from "react-icons/ai";

import {Autoplay, Pagination} from "swiper/modules";
import {context} from "../App";
import {useContext} from "react";

const Projects = () => {
    const lang = useContext(context);

    const {Projects} = content[lang];
    return (
        <section className="bg-bg_light_primary" id="projects">
            <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
                <div>
                    <h2 className="title" data-aos="fade-down">
                        {Projects.title}
                    </h2>
                    <h4 className="subtitle" data-aos="fade-down">
                        {Projects.subtitle}
                    </h4>
                    <br/>
                </div>
                <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
                    {/* <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]" 
           /> */}
                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        data-aos="fade-left"
                        spaceBetween={20}
                        autoplay={{delay: 5000}}
                        modules={[Pagination, Autoplay]}
                        className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
                    >
                        {Projects.project_content.map((content, i) => (
                            <SwiperSlide
                                key={i}
                                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
                            >
                                <a href={content.link} target="_blank" rel="noopener noreferrer">
                                    <img loading="lazy" src={content.image} alt="..."/>
                                </a>
                                <div className="flex justify-between gap-1 mt-2">
                                    <h5 className="font-bold font-Poppins">{content.title}</h5>
                                    <div className="flex gap-1">

                                        {content.link && (
                                            <a
                                                target="_blank"
                                                href={content.link}
                                                className="font-bold text-gray self-end"
                                                rel="noopener noreferrer"
                                            >
                                                <AiOutlineLink style={{height: "24", width: "24"}}/>
                                            </a>
                                        )}
                                        {content.githubLink && (
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={content.githubLink}
                                                className="font-bold text-gray self-end"
                                            >
                                                <AiFillGithub style={{height: "24", width: "24"}}/>
                                            </a>
                                        )}


                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Projects;
