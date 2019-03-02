import * as React from 'react'
import * as styles from './Index.module.scss'
import { graphql } from 'gatsby';
  
// THIS IS THE INTERFACE THAT TYPESCRIPT NEEDS TO VERIFY THAT THE QUERY MATCHES
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
      }
    }
  }
}

// THIS IS THE QUERY TO GET THE META DATA
export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`
  
export default class IndexPage extends React.Component<IndexPageProps, {}> {
  render() {
    const {name, tagline} = this.props.data.site.siteMetadata;
    return (
      <div className={styles.Container}>
        <h1>{name}</h1>
        <p>{tagline}</p>
      </div>
    )
  }
}
