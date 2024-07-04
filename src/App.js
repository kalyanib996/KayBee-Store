import "./App.css";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Home from "./components/home";
import About from "./components/About";
import Products from "./components/Products/Products";
import Contact from "./components/Contact";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart/Cart";
import ErrorPage from "./components/ErrorPage";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { StoreProvider } from "./appContext/ProductContext";
import { FilterContextProvider } from "./appContext/FilterContext";
import { CartProvider } from "./appContext/cartContext";
function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29,29,29,0.8)",
      white: "#fff",
      black: "#212529",
      helper: "#241571",
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <>
      <StoreProvider> {/* provides the product data  */}
        <FilterContextProvider>{/* provides the filter data for product page  */}
          <CartProvider>

          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/singleproduct/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
          </ThemeProvider>
          </CartProvider>
        </FilterContextProvider>
      </StoreProvider>
    </>
  );
}

export default App;
