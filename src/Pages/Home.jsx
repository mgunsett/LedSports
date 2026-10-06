import { Box } from "@chakra-ui/react";
import HeroWall from "../components/hero/HeroWall";
import About from "../components/About";
import Services from "../components/Services";
import TrustSection from "../components/TrustSection";
import Contact from "../components/Contact";
import { Toaster } from "../components/ui/toaster";

export const Home = () => {    
    return (
        <Box id="home" height={'100%'} pb={20} bg="black" color="white" overflowX="hidden">
            <HeroWall />
            <Toaster />
            <About />
            <Services />
            <TrustSection />
            <Contact path={window.location.pathname}/>
        </Box>
    )
}

