import React from "react";
import { Title } from "../components";
import { services } from "../data/data";

const Services = () => {
  return (
    <div>
      <Title title="Services" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <div
            data-aos="fade-up" data-aos-duration="1000"
            key={service.id}
            style={{ boxShadow: "0px 5px 90px 0px rgba(0, 0, 0, 0.1)" }}
            className="py-8 px-6 rounded-lg bg-white flex flex-col gap-4 hover:border-b-4 hover:border-accentColor hover:-translate-y-1 transition-all duration-300"
          >
            <div className="p-4 rounded-full text-xl text-white bg-accentColor w-fit">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
            <p className="text-sm text-gray-600 leading-6">{service.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
