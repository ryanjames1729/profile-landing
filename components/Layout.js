import React from "react"
import Meta from "../components/Meta"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Layout = ({children}) => {

    return (
        <>
            <Meta />
                <div>
                    {children}
                </div>
        </>
    )

}

export default Layout


export const getStaticProps = async () => {
    const graphcms = new GraphQLClient('https://api-us-east-1.graphcms.com/v2/cl3d136e21hr801zd7ypwhzhi/master');
  
    const { landingPages } = await graphcms.request(`
      {
        landingPages {
          blogLink
          githubLink
          twitterLink
          linkedinLink
          emailLink
        }
      }
    `)
  
    return {
      props: {
        landingPages,
      },
      revalidate: 10,
    };
  
  }