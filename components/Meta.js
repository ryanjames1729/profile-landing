import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
    return (
        <Head>
            <meta name = 'viewport' content = 'width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </Head>

    )
}

Meta.defaultProps = {
    title: 'Ryan James',
    keywords: 'ryanjames, edtech, web development',
    description: 'Ryan James is a computer science teacher and builds websites for fun.'
}

export default Meta