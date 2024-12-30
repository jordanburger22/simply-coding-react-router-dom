import SingleService from "./SingleService";


function Services() {

    const services = [
        {
          id: 1,
          name: "Space Tour Planning",
          description: "Plan your entire journey across the galaxy.",
          price: 9999,
          groupSize: 5,
          duration: "7 days"
        },
        {
          id: 2,
          name: "Rocket Maintenance",
          description: "Keep your spacecraft in top shape for interstellar travel.",
          price: 2999,
          groupSize: 2,
          duration: "3 days"
        },
        {
          id: 3,
          name: "Zero-Gravity Adventure",
          description: "Experience weightlessness on an orbital excursion.",
          price: 4999,
          groupSize: 10,
          duration: "1 day"
        },
        {
          id: 4,
          name: "Asteroid Mining Consultancy",
          description: "Start your own space mining operation with expert advice.",
          price: 14999,
          groupSize: 4,
          duration: "14 days"
        }
      ];


    return (
        <div className="services">
            <h1>Our Services</h1>
            <p>Click on a service to learn more about it.</p>
            <div className="services-container">
                {services.map((service) => (
                    <SingleService  {...service} key={service.id} />
                ))}
            </div>
        </div>
    );
}

export default Services;
