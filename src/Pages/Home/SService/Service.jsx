import { FaArrowRight } from "react-icons/fa";


const Service = ({ service }) => {
    const { title, img, price} = service;
    return (
        <div>
            <div className="card w-96 h-96 bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-xl text-orange-500">Price: {price}</p>
                    <div className="card-actions flex justify-end">
                        <button className="btn btn-square">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;