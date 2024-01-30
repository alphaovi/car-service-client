import { useEffect } from "react";
import { useState } from "react";
import Service from "../SService/Service";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    } , [])
    return (
        <div className="mt-5">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Our Service</h3>
                <h3 className="text-5xl">Our Service Area</h3>
                <p>The majority have suffered alteration in some form, by injected <br /> humour, or randomised words which do not look even slightly believable</p>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    services.map(service => <Service 
                        key={service._id}
                        service={service}

                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;