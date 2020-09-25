// import React from 'react';
// import { Link, graphql, navigate } from 'gatsby';
// import window from 'browser-monads';
// import Nav from '../components/nav';
// import SEO from '../components/seo';
// import Layout from '../components/layout';
// import './archive.css';





// const Tech = (props) => {
  
  
//   const blogContent = props.data.allContentfulBlog
//   const { CurrentPage, numPages } = props.pageContext
//   const isFirst = currentPage === 1
//   const isLast = currentPage === numPages
//   const prevPage = currentPage -1 === 1 ? '/category/tech' : `/category/tech${currentPage -1}`
//   const nextPage = `/category/tech${currentPage + 1}`


//   return (
//     <Layout>
//     <SEO title = 'Blog'  keywords={['travel', 'travel blog', 'travel photography']} />
//     <Nav />

//     <header>
//       <div className='archive__section'>
//         <div className='archive__hero'> style={{backgroundImage:  `url(${headerImg})`}}</div>
//         <div className='archive__nav'>
//           <Link to='/blog' className={window.location.href.indexOf('/blog')> 0? 'archive__nav--link selected': 'archive__nav--link'}>Guide</Link>
//           <Link to='/category/tech' className={window.location.href.indexOf('category/tech')> 0? 'archive__nav--link selected': 'archive__nav--link'}>Tech</Link>
//         </div>
//       </div>
//     </header>
     

//     <div className='feed'>
//         {data.allContentfulBlog.edges.map(edge => (
//             <div key={edge.node.id} className='card'
//             style={{
//                 backgroundImage: `linear-gradient(
//                 to bottom, 
//                 rgba(10,10,10,0) 50%,
//                 rgba(10,10,10,0.7) 100%),
//                 url(${edge.node.featuredImage.fluid.src})`
//             }}
//         onClick={() => navigate(`/blog/${edge.node.slug}`)} >
          
//           //can not get value i don't know why 
//         {edge.node.category.map(categories=> (
//             <p className='card__category'>{categories.category}</p>
//         ))}
//         <p className='card__title'>{edge.node.title}</p>
//         </div>
//         ))}
//       </div>
        
//       <div className='pagination'>
//         <div className='pagination__item'>
//           {!isFirst && (
//              <Link to ={prevPage} rel='prev'>
//                <div className='arrow__back'>

//                </div>
//              </Link>
//           )}
//         </div>

//         <div className='pagination__item'>
//           {!isFirst && (
//              <Link to ={nextPage} rel='next'>
//                <div className='arrow__next'>
                
//                </div>
//              </Link>
//           )}
//         </div>
//       </div>


//    </Layout>   
//   )
 

  
// }
// export default Tech;



// export const query = graphql`
//  query TechQuery($skip: Int!, $limit: Int!) {

//    allcontentfulBlog{
//     sort: { fields: [createdAt], order: DESC }
//     filter: { 
//       node_local: {eq: "en-Us",}}
//       categories: {elemMatch: {category: {eq: "Tech"}}}
//     }
//     skip: $skip
//     limit: $limit 

//      ) {
//          edges {
//         node {
//           id
//           slug
//           title
//           category {
//             id
           
//           }
//           featuredImage {
//             fluid(maxWidth: 1200, quality: 85) {
//               src
//               ...GatsbyContentfulFluid      
//             }
//           }
//         }
//       }
//     }
//   }
// `
