import Head from "next/head";

export default function HeadComponent() {
    return (
        <Head>
            <title>Grade Calculator</title>
            <meta name="description" content="Calculate your weighted average and what grades are needed to achieve a different overall mark." />
            <meta name="robots" content="noindex" /> {/* TODO: REMOVE THIS WHEN DONE */}
            <link rel="icon" href="/favicon.ico" /> 
        </Head>
    );
}