import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/SEO/SEO";
import Title from "../styles/title";
import FaqItem from "../components/faqitem";

const Faq = ({ data }) => {
    const items = data.allAirtable.edges

    return (
        <>
            <Seo title="Discover Kitchen - FAQ" />
            <div className="container is-max-desktop">
                <Title title="Frequently Asked Questions" />
                {items.map(item => (
                    <FaqItem
                        question={item.node.data.Question}
                        answer={item.node.data.Answer.childMarkdownRemark.html}
                    />
                ))}
            </div>

        </>
    )
};

export const AboutQuery = graphql`{
    allAirtable(
      filter: {table: {eq: "FAQ"}, data: {Status: {eq: "Post"}}}
      sort: {fields: data___Number}
    ) {
      edges {
        node {
          id
          data {
            Number
            Question
            Answer {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  }  
`


export default Faq;
