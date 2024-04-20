import { CamperModal } from "../CamperModal";
import {
  CatalogWraper,
    CLWraper,
    CamperPhoto,
    InfoBlock,
    MainInfoWrap,
    MainBlock,
    PriceWrap,
    SeconBlockWrap,
    SeconBlock,
    Title,
    Price,
    Text,
    SpanUnderline,
    MainTextWrap,
    MainText,
    DetailsList,
    DetailsItem,
    DetailsSpan,
    HeartIcon,
    RedHeartIcon,
    ShowMoreBtn,
  CLItem,
  StarIcon,
  NoCamperText,
  LoadMoreBtn
  } from "./CamperList.styled";
  import { ReactComponent as Location } from "../../images/svg/location.svg";
  import { ReactComponent as User } from "../../images/svg/users.svg";
  import { ReactComponent as Beds } from "../../images/svg/beds.svg";
  import { ReactComponent as Transmission } from "../../images/svg/transmission.svg";
  import { ReactComponent as Kitchen } from "../../images/svg/kitchen.svg";
  import { ReactComponent as Petrol } from "../../images/svg/petrol.svg";
  import { ReactComponent as AC } from "../../images/svg/ac.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdverts,filteredAdverts} from "../../redux/selectors";
import { fetchAllAdverts } from "../../redux/advertsOperations";
  
export const CamperList = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [modalAdvert, setModalAdvert] = useState({});
  const [favorite, setFavorite] = useState([]);
  const [page, setPage] = useState(1);

    // const toast = useNotification();
    const dispatch = useDispatch();
  let datalength = 13
    useEffect(() => {
      setFavorite(JSON.parse(localStorage.getItem('favoritesArray')))
    },[])
  
    useEffect(() => {
        dispatch(fetchAllAdverts(1))
    },[dispatch])  

  const addFavorite = (id) => {
    setFavorite((prev) => { 
      if (prev.includes(id)) {
        return [...prev]
      } else {
        localStorage.setItem('favoritesArray', JSON.stringify([...prev,...id]))
        return [...prev,...id]
      }
    })
  }

  const removeFavorite = (id) =>{
    setFavorite((prev) => { 
      const filteredPrev = prev.filter(el => el !== id)
      localStorage.setItem('favoritesArray', JSON.stringify([...filteredPrev]))
      return [...filteredPrev]
    })
  }
  
  const adverts = useSelector(getAdverts);
  const AllFilteredAdverts = useSelector(filteredAdverts);
  console.log('adverts', adverts);
  console.log('AllFilteredAdverts', AllFilteredAdverts);
  

  const onCloseModal = () => {
    setIsModalActive(false)
  }

  // const loadMoreAdverts =  (page) => {
  //   setModalAdvert(async (prev) => { 
  //     page += 1
  //     const data = await dispatch(fetchAllAdverts(page))
  //     console.log('prev', prev);
  //     console.log('page', page);
  //     console.log('data',data.payload);
  //     return [...prev,...data]
  //   })
  // } 

    return (
      <>
        {isModalActive && <CamperModal adverts={modalAdvert} onCloseModal={onCloseModal}></CamperModal>}
        <CatalogWraper>
        <CLWraper>
          
          {AllFilteredAdverts.length ? AllFilteredAdverts.map(
            (advert) => { 
            return (
              <CLItem id={advert._id} key={advert._id}>
                <CamperPhoto src={advert.gallery[0]} alt="Camper photo" />
                <InfoBlock>
                  <MainInfoWrap>
                    <MainBlock>
                      <Title>{advert.name}</Title>
                      <PriceWrap>
                        <Price>Є{advert.price.toString().concat('.00')}</Price>
                        {favorite.includes(advert._id)? <RedHeartIcon onClick={()=>removeFavorite(advert._id)} />:<HeartIcon onClick={()=>addFavorite(advert._id)} />}
                      </PriceWrap>
                    </MainBlock>
                    <SeconBlockWrap>
                      <SeconBlock>
                        <StarIcon />
                        <Text>
                            <SpanUnderline>
                            {advert.rating}({advert.reviews.length} Reviews)
                            </SpanUnderline>
                        </Text>
                      </SeconBlock>
                      <SeconBlock>
                        <Location />
                        <Text>{advert.location}</Text>
                      </SeconBlock>
                    </SeconBlockWrap>
                    </MainInfoWrap>
                        <MainTextWrap>
                          <MainText>{advert.description}</MainText>
                        </MainTextWrap>
                  <DetailsList>
                    <DetailsItem>
                      <User />
                      {`${advert.adults} adults`}
                    </DetailsItem>
                    <DetailsItem>
                      <Transmission />
                      <DetailsSpan>{advert.transmission}</DetailsSpan>
                    </DetailsItem>
                    <DetailsItem>
                      <Petrol />
                      <DetailsSpan>{advert.engine}</DetailsSpan>
                    </DetailsItem>
                    <DetailsItem>
                      <Kitchen />
                      <DetailsSpan>Kitchen</DetailsSpan>
                    </DetailsItem>
                    {advert.details.beds ? (
                      <DetailsItem>
                        <Beds />
                        {`${advert.details.beds} beds`}
                      </DetailsItem>
                    ) : (
                      ""
                    )}
                    <DetailsItem>
                      <AC />
                      AC
                    </DetailsItem>
                  </DetailsList>
                  <ShowMoreBtn
                    type="button"
                    onClick={() => {
                      setModalAdvert(advert)
                      document.querySelector('html').classList.add('no-scroll');
                      setIsModalActive(true)
                    }}
                  >Show more
                  </ShowMoreBtn>
                </InfoBlock>
              </CLItem>
            );
          }
        ):<NoCamperText>There are no campervans with your filters</NoCamperText>}
          </CLWraper>
          {adverts.length<datalength &&  <LoadMoreBtn
            type="button"
            onClick={() => {
              setPage((prev)=> prev + 1)
              dispatch(fetchAllAdverts(page+1))
            }}>Load More</LoadMoreBtn>}
  
          </CatalogWraper>
        </>
    );
  };
  