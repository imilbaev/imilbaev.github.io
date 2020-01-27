import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

const IndexPage = ({ data }) => {
	const { edges } = data.allMarkdownRemark;
	return (
		<Layout>
			<h1>Imilbaev Ramis</h1>
			<p>Hello there, my name is Ramis. I'm a software developer. </p>
      
      {edges.map(edge => {
				const { frontmatter: post } = edge.node;
				return (
					<div key={post.path}>
						<Link to={post.path}>{post.title}</Link>
					</div>
				);
			})}
		</Layout>
	);
};

export const query = graphql`
	query HomepageQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					frontmatter {
						title
						path
						date
					}
				}
			}
		}
	}
`;

export default IndexPage;
