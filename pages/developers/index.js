import Link from 'next/link';
import styles from '../../styles/developer.module.css';

    export const getStaticProps = async () => {
     const res = await fetch('https://jsonplaceholder.typicode.com/users'); 
     const data = await res.json();
     
     
     return {
        props: {
            developers: data
        },
     };
    }



export default function Developers ({developers}) {
   
    return (
        
            <div className={styles.container}>
                 <h1 className={styles.title}>Meet the Devs 👨‍💻👩‍💻</h1>
                 <div className={styles.grid}>
                    {
                        developers.map((dev) => (
                            <Link key={dev.id} href={`/developers/${dev.id}`} className={styles.card}>
                                <h3>{dev.name}</h3>
                                <p>{dev.email}</p>
                                <p>{dev.address.city}</p>
                            </Link>
                        )
                        )
                    }
                 </div>
            </div>
        
    );
}
