import Image from "next/image";

const capabilitiesData = [
    {
        item: [
            {
                title: "Node.JS",
                image: <Image src="/capabilities/nodejs.png" alt="Node JS" height={55} width={173} />,
                description: "<p>Node.JS is our technology of choice for building enterprise systems built on a microservices architecture.</p>",
            },
            {
                title: "REACT & REACT Native",
                image: <Image src="/capabilities/react.png" alt="Node JS" height={60} width={67} />,
                description: "REACT is a JavaScript library for building user interfaces. REACT Native is a framework for building native apps. ",
            },
            {
                title: "AWS Services",
                image: <Image src="/capabilities/aws.png" alt="Node JS" height={60} width={138} />,
                description: "Our enterprise systems are usually built on Amazon AWS Web Services, including DynamoDB.",
            },
            {
                title: "Drupal 8 & 9 and Contenta (Headless)",
                image: <Image src="/capabilities/drupal.png" alt="Node JS" height={60} width={57} />,
                description: "Drupal is the world's best open-source web content management (CMS) platform. Contenta is the API based Drupal distribution.",
            },
            {
                title: "Laravel",
                image: <Image src="/capabilities/laravel.png" alt="Node JS" height={55} width={173} />,
                description: "One of the latest, most robust, and easiest to understand PHP frameworks.",
            },
            {
                title: "Databases",
                image: <Image src="/capabilities/database.png" alt="Node JS" height={55} width={173} />,
                description: "Scalable and high-performance database systems using MongoDB and MySQL",
            }
        ]
    },
    {
        title: "Website & Software Development",
    },
    {
        title: "Outsourcing"
    },
    {
        capability: [
            {
                title: "Website & Software Development",
            },
            {
                title: "Outsourcing"
            },
            {
                image: <Image src="/capabilities/spanners.png" alt="Spanners" height={47} width={45} />,
                description: "Design and manage your project from start to finish"
            },
            {
                image: <Image src="/capabilities/people.png" alt="In-house Team" height={47} width={45} />,
                description: "Create an in-house team working solely on your project. The team can be fully accountable to you"
            },
            {
                image: <Image src="/capabilities/cloud.png" alt="Cloud Based" height={47} width={45} />,
                description: "Turn your paper based process flow into a cloud based system"
            },
            {
                image: <Image src="/capabilities/hands.png" alt="Manpower" height={47} width={45} />,
                description: "Provide extra manpower for your existing project"
            }
        ]
    },
    {
        micro: [
            {
                title: "The Microservices Option",
                image: <Image src="/capabilities/options.png" alt="Microservices Options" height={263} width={255}/>,
                description: 'Microservices is a technique to program development in where a huge application is designed as a collection of modular services. Each module can handle a particular business goal and uses a very simple, well-defined interface to express with other models of services. Companies such as Uber, Amazon, Netflix, and eBay are built using microservices. Microservices are used when the system is too big to be one system. Systems that are not microservices are termed "monolithic".'
            }

        ]
    }
]

export default capabilitiesData;