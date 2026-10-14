import { Box } from "@chakra-ui/react";
import HeroWall from "@/components/home/HeroWall";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import TrustSection from "@/components/home/TrustSection";
import Contact from "@/components/common/Contact";
import { Toaster } from "../components/ui/toaster";

export const Home = () => {    
    return (
        <Box id="home" height={'100%'} pb={20} bg="black" color="white" overflowX="clip">
            <HeroWall />
            <Toaster />
            <About />
            <Services />
            <TrustSection />
            <Contact path={window.location.pathname}/>
        </Box>
    )
}

