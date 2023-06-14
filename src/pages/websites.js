import servicesData from "../../static-data/website-services";

import styles from "../styles/websites.module.css";

const Websites = () => {
    console.log();
    return (
        <div>
            <h1>
                {servicesData.title}
            </h1>

            <div className={styles.description} dangerouslySetInnerHTML={{ __html: servicesData.description }} />
        </div>

    );
}

export default Websites;