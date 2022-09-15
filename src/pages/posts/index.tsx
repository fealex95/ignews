import Head from 'next/head';

import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.post}>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Past, Present, and Future of React State Management</strong>
                        <p>React was introduced in May 2013. Its paradigm shift was that your UI was a function of your state. Given some component state, React can determine what your component will look like. React is built upon the idea of state. However, state has long been one of the most difficult parts of building a React application.</p>
                    </a>
                </div>

                <div className={styles.post}>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Past, Present, and Future of React State Management</strong>
                        <p>React was introduced in May 2013. Its paradigm shift was that your UI was a function of your state. Given some component state, React can determine what your component will look like. React is built upon the idea of state. However, state has long been one of the most difficult parts of building a React application.</p>
                    </a>
                </div>

                <div className={styles.post}>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Past, Present, and Future of React State Management</strong>
                        <p>React was introduced in May 2013. Its paradigm shift was that your UI was a function of your state. Given some component state, React can determine what your component will look like. React is built upon the idea of state. However, state has long been one of the most difficult parts of building a React application.</p>
                    </a>
                </div>
            </main>
        </>
    )
}