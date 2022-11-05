import { collectionObject } from "../../@types/collection";
import { genetateProfileMedias } from "../../utils/modules";
import styles from "../../styles/collectionInfo.module.css";
const MainProfileLayout = ({ data }: { data: collectionObject }) => {
    return (
        <div className={styles.container}>
            <div className={styles.profile_medias_contents}>
                <div style={genetateProfileMedias(data).bgImg} className={styles.cover}>
                    <div style={genetateProfileMedias(data).pfp} className={styles.pfp}></div>
                </div>
            </div>
            <div className={styles.profile_text_contents}>
                <h4 className={`${styles.display_title} ${styles.display_text}`}>{data?.collection}</h4>
                <p className={`${styles.display_description} ${styles.display_text}`}>{data?.description}</p>
            </div>
        </div>
    );
};

export default MainProfileLayout;
