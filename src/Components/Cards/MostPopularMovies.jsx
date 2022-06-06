import { Box, Grid, GridItem, Text, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";

const Cards = ({ loading, setLoading }) => {


  const [topMovies, setTopMovies] = useState([]);


  useEffect(() => {
    setLoading(true);
    if (topMovies.length === 0) {
      axios.get(`https://imdb-api.com/en/API/MostPopularMovies/k_wy6s5y04`)
        .then(res => {
          console.log(res.data);
          setTopMovies(res.data.items);
          setLoading(false);
        });
    }else{
      setLoading(false);
    }
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  const sliceArray = () => {

    return topMovies.slice(0, 18);

  }
  if (loading) {
    return (
      <Box display="flex" alignItems="center" padding={"40vh 0"} justifyContent="center" minH={{ base: "", md: "700px" }} h={{ base: "", md: "92vh" }}>
        <Spinner width="50px" height="50px" color='red.500' />
      </Box>
    )
  } else {
    return (
      <Box display="flex" flexDirection="column" justifyContent="center" minH={{ base: "", md: "700px" }} h={{ base: "", md: "92vh" }} >
        <Text margin={{base:"20px 0px 20px 20px", sm:"20px 0px 20px 50px", md:"0px 0px 20px 50px"}} fontSize="25px" fontWeight="bold" textAlign="start">Peliculas Populares</Text>
        <Grid margin={{base:"0px 20px", sm: "0px 50px"}} templateRows='repeat(3, 1fr)' templateColumns={{base: "1fr", md: "repeat(6, 1fr)"}} gap={3}>
          {
            sliceArray().map(movie => (
              <GridItem key={movie.id}  w='100%' h={{base: "250px", md:"150px"}} display="flex" alignItems="center" justifyContent="center" borderRadius="5px" role="group" p="1px" position="relative" backgroundPosition="center" backgroundImage={movie.image.startsWith("https://m.media-amazon.com/images/M") ? movie.image : `https://imdb-api.com/images/600x400${movie.image.replace("https://imdb-api.com/images/original", "")}`} backgroundSize="cover" backgroundRepeat="no-repeat" margin="0px 0px 50px 0px">
                {                                                                                                                                                                                         // if(movie.image.startsWith("https://m.media-amazon.com/images/M"))
                  <Box zIndex="100" w={{base:"90%",sm:"95%" ,md:"200px", lg: "300px"}} h="180px" bg="rgba(32, 32, 32, 0.973)" borderRadius="5px" display="none" position="absolute" flexDirection="column" _groupHover={{ display: "flex" }}>
                    <Box>
                      <Text p="5px" fontWeight="bold" fontSize="20px">{movie.title}</Text>
                    </Box>
                    <Text marginTop="auto" p="0px 10px">
                      {movie.crew}
                    </Text>
                    <Box marginTop="auto" marginBottom="5px" justifyContent="center" display="flex">
                      <Box m="0px 5px" alignItems="center" display="flex">
                        <AiFillStar style={{ width: "20px", height: "20px", color: "red" }} />
                        <Text>{movie.imDbRating ? movie.imDbRating : "Proximamente"}</Text>
                      </Box>
                      <Text m="0px 5px">Año: {movie.year}</Text>
                    </Box>

                  </Box>
                }
              </GridItem>
            ))
          }
        </Grid>
      </Box>
    )
  }

}

export default Cards;