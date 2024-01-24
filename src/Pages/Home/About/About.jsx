import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";


const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-white border-8 shadow-2xl" />
                </div>
                <div className="lg:w-1/2 space-y-5 p-4">
                    <h3 className="text-3xl text-orange-600 font-bold">About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & experience in this field</h1>
                    <p className="py-6">There are many Variations Of Passages Of Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, odit labore veritatis doloremque tempore eos officiis. Labore consectetur possimus eos tempora quibusdam molestiae repellendus sapiente explicabo. Maxime debitis aliquid exercitationem!</p>
                    <p className="py-6">There are many Variations Of Passages Of Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, odit labore veritatis doloremque tempore eos officiis. Labore consectetur possimus eos tempora quibusdam molestiae repellendus sapiente explicabo. Maxime debitis aliquid exercitationem!</p>
                    <button className="btn btn-primary bg-orange-600">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;