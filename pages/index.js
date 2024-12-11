// import HomeScreen from '../src/screens/HomeScreen';

// export default HomeScreen;

// function GlobalStyle() {
//     return (
//         <style global jsx>{`
//             body {
//                 color: blue;
//                 font-family: sans-serif;
//             }
//         `}</style>
//     )
// }

import React from 'react';
import Footer from '../src/components/patterns/Footer';
import GlobalStyle from '../src/theme/GlobalStyle';

import HomeScreen from '../src/screens/HomeScreen';

export default HomeScreen;


// function Title({ children, as }) {
//     const Tag = as;
//     return (
//         <>
//             <Tag>{children}</Tag>
//             <style jsx>{`
//                 ${Tag} {
//                     color: red;
//                     font-family: sans-serif;
//                 }
//             `}</style>
//         </>
//     );
// }

// export default function HomePage() {
//     return (
//         <div>
//             <GlobalStyle/>
//             <Title as="h1">Alura Cases</Title>
//             <NextLink href="/faq" passHref>
//                 Ir para o FAQ
//             </NextLink>
//             <Footer/>
//         </div>
//     );
// }
