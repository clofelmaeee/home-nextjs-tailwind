import Image from "next/image";

const servicesData = [
    {
        title: "Our Website, Mobile Application and Software Development Services",
        description: [
            {
                item: "We design and build custom portfolio and eCommerce websites, and mobile applications.",
            },
            {
                item: "Our focus is on fast loading websites that are easy for you to manage and update yourself.",
            },
            {
                item: "We can build websites of any complexity, as we are also a software development company.",
            },
            {
                item: "Our graphic and UX teams can design the website to match your brand if you require."
            }
        ]
    },
    {
        title: "Our Drupal Website Services",
        description: [
            {
                item: "Drupal Website Development.",
            },
            {
                item: "Drupal Upgrades from Drupal 6, 7, 8 & 9 to Drupal 10.",
            },
            {
                item: "Drupal maintenance and hosting services.",
            },
            {
                item: "Headless Drupal Development or rebuilding with Drupal Contenta.  Drupal Contenta is the API distribution for a decoupled architecture. We build the front end with REACT (Next.js), to get fastest loading speed."
            }
        ]
    },
    {
        title: "Our HASP SaaS CMS Platform",
        description: [
            {
                text: "HASP is modern CMS platform which provides the lowest-cost solution for custom website development. It is the best choice for both small business websites, large corporate websites, and Government websites. Key features include:",
            },
            {
                item: "Very fast website loading speed due to the front end being built with REACT and hosted on Cloudflare or Vercel.",
            },
            {
                item: "Being on a SaaS platform significantly reduces the maintenance costs compared to purely a custom or Drupal websites.",
            }
        ]
    },
    {
        title: "Marketplace Website Development",
        description: [{
            item: "We custom-build large SaaS Marketplace Websites/Systems capable of handling millions of subscribers or users.",
        },
        {
            item: "These systems are built with a microservices architecture using either Node.js or Laravel, while running on Amazon AWS services",

        }]

    },
    {
        title: "Custom Applications and SaaS Platform Development",
        description: [{
            text: "As a software development company, we can build any system or application to meet your exact requirements, including the development of custom SaaS platforms.",
        }]
    },
    {
        websites:[
            {
                image: <Image src="/wingzone-01_1.png" alt="Wingzone" width={875} height={478}/>
            
            },
            {
                image: <Image src="/viva.jpg" alt="Viva" width={875} height={553}/>
            },
            {
                image:  <Image src="/filinvest-city.jpg" alt="Viva" width={875} height={553}/>
                
            },
            // {
            //     image: "/island-property.jpg"
            // },
            // {
            //     image: "/thered.jpg"
            // },
            // {
            //     image: "quest-clark.jpg"
            // },
            // {
            //     image: "/katre.jpg"
            // },
            // {
            //     image: "/saffron.jpg"
            // },
            // {
            //     image: "/papermoon.jpg"
            // },
            // {
            //     image: "/smitten.jpg"
            // },
            // {
            //     image: "/spigen.png"
            // },
            // {
            //     image: "/filinvest.jpg"
            // },
            // {
            //     image: "/nexen.jpg"
            // },
            // {
            //     image: "/vj7.jpg"
            // },
            // {
            //     image: "/axeia.jpg"
            // },
            // {
            //     image: "/finelyf.jpg"
            // },
            // {
            //     image: "/mvp.jpg"
            // },
            // {
            //     image: "/hevacoffee.jpg"
            // },
            // {
            //     image: "/sympa.jpg"
            // },
            // {
            //     image: "/sierra.jpg"
            // },
            // {
            //     image: "/cocotres.jpg"
            // },
            // {
            //     image: "/pnoc-ec.png"
            // },
            // {
            //     image: "/bcda.jpg"
            // },
            // {
            //     image: "/vj7.jpg"
            // },
            // {
            //     image: "/theone.jpg"
            // },
        ]
    }
]

export default servicesData;