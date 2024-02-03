import { useLoaderData } from "react-router-dom";

const Checkout = () => {

    const service = useLoaderData();
    const { title, _id } = service;

    return (

        <div className="my-8 p-8">
            <form >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-block btn-primary" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>

    );
};

export default Checkout;