import React from "react";
import "./services.css";
import data from "./data";
import Card from "../../components/Card";
const Services = () => {
  return (
    <section id="services">
      <h2>my serrvices</h2>
      <p>
        I will provide a comprehensive services below which will satisfy your
        business requirements
      </p>
      <div className="container services__container">
        {data.map((item) => (
          <Card key={item.id} className="service light">
            <div className="service__icon">{data.icon}</div>
            <div className="service__title">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
