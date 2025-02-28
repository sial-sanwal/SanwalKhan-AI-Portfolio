import {useContext} from "react";
import {context} from "../App";
import {content} from "../Content";
import Balancer from 'react-wrap-balancer'

const Services = () => {
    const lang = useContext(context);
    const {services} = content[lang];
    return (<section id="services">
        <div className="md:container px-5 py-14">
            <h2 className="title" data-aos="fade-down">
                {services.title}
            </h2>
            <h4 className="subtitle" data-aos="fade-down">
                {services.subtitle}
            </h4>
            <br/>
            <div className="flex gap-5 justify-between flex-wrap group">
                {services.service_content.map((content, i) => (<div
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 600}
                    className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1"
                >
                    <img src={content.logo} loading="lazy" alt="..." className="mx-auto"/>
                    <h6 className="my-3">{content.title}</h6>
                    <Balancer className="leading-7" ratio={0} preferNative={false}>{content.para}</Balancer>
                </div>))}
            </div>
        </div>
    </section>);
};

export default Services;
