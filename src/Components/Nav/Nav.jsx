import Logo from "./netflixLogo.svg";
import MinimalLogo from "./minimalLogo.png";
import SearchBar from "../SearchBar/SearchBar";
import { IoNotificationsSharp } from "react-icons/io5";
import AvatarIcon from "./avatarIcon.jpg";
import { ListItem,UnorderedList, Image, Box, Link} from '@chakra-ui/react';

const Nav = ({ setSearch, setLoading }) => {

    return (
        <Box display="flex" paddingTop={{base:"5px", sm:"10px"}} justifyContent={{base:"center", sm:"start"}} width="100%" alignItems="center">
            <Link href="/">
                <Image width="80px" display={{base:"none", sm:"flex"}} margin="0px 10px 0px 50px" src={Logo} alt="logoNetflix" />
                <Image width="40px" display={{base:"flex", sm:"none"}} marginLeft="10px" src={MinimalLogo} alt="minimalLogo"/>
            </Link>
            <UnorderedList display={{base:"none",sm:"none",lg:"flex"}} listStyleType="none">
                <ListItem _hover={{color:"gray", transition:"300ms"}} cursor="pointer" margin="0px 5px">Inicio</ListItem>
                <ListItem _hover={{color:"gray", transition:"300ms"}} cursor="pointer" margin="0px 5px">Series</ListItem>
                <ListItem _hover={{color:"gray", transition:"300ms"}} cursor="pointer" margin="0px 5px">Peliculas</ListItem>
                <ListItem _hover={{color:"gray", transition:"300ms"}} cursor="pointer" margin="0px 5px">Novedades populares</ListItem>
                <ListItem _hover={{color:"gray", transition:"300ms"}} cursor="pointer" margin="0px 5px">Mi lista</ListItem>
            </UnorderedList>
            <Box display="flex"  justifyContent={{base:"end"}} w={{base:"100%", sm:"350px"}} marginLeft="auto" marginRight={{base: "20px", sm:"50px", md:"50px"}} alignItems="center">
                <SearchBar setLoading={setLoading} setSearch={setSearch} />
                <Box fontSize="25px" margin="0px 10px" display={{base:"none", sm:"flex"}}>
                    <IoNotificationsSharp/>
                </Box>
                <Image width={{base:"35px", md:"35px"}} margin="0px" src={AvatarIcon} alt="avatarIcon" />
            </Box>
        </Box>
    )
}

export default Nav;