import { IoSearchSharp } from "react-icons/io5";
import { Input, Button, Box} from '@chakra-ui/react';
import { useState } from "react";




const SearchBar = ({ setSearch, setLoading }) => {

    const [searchValue, setSearchValue] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchValue.length > 0) {
            setLoading(true);
            setSearch(() => {
                return {
                    view: true,
                    value: searchValue
                }
            })
        }

    }

    return (
        <Box display="flex" alignItems="center" margin={{ base: "0px 20px 0px 10px", sm: "0" }} w={{ base: "100%", sm: "200px", lg: "250px" }} h="35px" border="1px solid white">
            <form onSubmit={handleSubmit} style={{ display: "flex", width: "100%", alignItems: "center" }}>
                <Button type="submit" fontSize="25px" bg="transparent" p="0" w="30px" h="30px" _focus={{ border: "none", bg: "transparent" }} _hover={{ bg: "transparent", color: "red" }}>
                    <IoSearchSharp />
                </Button>
                <Input value={searchValue} w={{ base: "100%" }} p="0" onChange={(e) => setSearchValue(e.target.value)} outline="none" border="none" _placeholder={{ color: "white" }} focusBorderColor="transparent" placeholder="Títulos, personas, géneros" type="text" />
            </form>

        </Box>
    )
}

export default SearchBar;