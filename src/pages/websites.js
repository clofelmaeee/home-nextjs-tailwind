import BackToTop from "@/components/BackToTop";
import Image from "next/image";
import servicesData from "../../static-data/website-services";
import styles from "../styles/websites.module.css";

const Websites = ({ websites }) => {

    return (
        <div>
            <h1 className={`${styles.customBg}`}>{websites.title}</h1>
            <div className={styles.container}>
                <div className={styles.description} dangerouslySetInnerHTML={{ __html: websites.description }} />
            </div>

            <section className={`project-list ${styles.projectList}`}>

                {websites.projects.map((item, index) => (
                    <div key={index} className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
                        <div className={` ${styles.itemWrapper}`}>
                            <div className={`image-container relative ${styles.imageContainer}`}>
                                <Image
                                    src={item.image.path}
                                    alt={item.image.alt}
                                    width={item.image.width}
                                    height={item.image.height}
                                    className={styles.image}

                                />
                            </div>
                            <div className={`title  ${styles.title}`}>{item.title}</div>
                        </div>
                    </div>
                ))}

            </section>
            <BackToTop />
        </div>

    );
}

export default Websites;

export async function getStaticProps() {
    const websites = servicesData;
    return {
        props: {
            websites,
        },
    };
}