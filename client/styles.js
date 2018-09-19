import styled from 'styled-components';

const Container = styled.div`
  width: 648px;
  margin: auto;
  font-family: 'Nunito', sans-serif;
  color: #484848;
  font-size: 14px;
`;

const HeaderContainer = styled.div`
  display: flex;
  border-top: 1px solid #EBEBEB;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
  align-content: center !important;
`;

const TotalReviews = styled.div`
  margin-right: auto;
  flex-basis: 80%;
`;

const TotalReviewsText = styled.span`
  margin-right: 10px;
  font-size: 24px;
`;

const HeaderRatingStars = styled.span`
  color: #128488;
  font-size: 18px;
  margin-bottom: 5px;
`;

const SearchBox = styled.div`
  flex-basis: 20%;
  input:focus {
    border-color: #128488;
    outline:none;
  }
`;

const SearchInput = styled.input`
  width: 181px;
  padding: 7px;
  border-radius: 2px;
  border-width: 1px;
  border-color: #EBEBEB;
  border-style: solid;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 18px;
`;


const RatingsContainer = styled.div`
  display: flex;
  border-top: 1px solid #EBEBEB;
  padding-top: 20px;
  font-size: 16px;
  justify-content: space-between;
`;

const RatingsLeftContainer = styled.div`
  flex-basis: 47%;
`;

const RatingsRightContainer = styled.div`
  flex-basis: 47%;
`;

const RatingTextAndStarsContainer = styled.span`
  display: flex;
  margin-bottom: 12px;
  align-items: center;
`;

const RatingText = styled.span`
  flex: 10;
`;

const RatingStars = styled.span`
  color: #128488;
`;

const Star = styled.span`
  margin-left: 8px;
`;

const ReviewProfileImage = styled.img`
  width: 48px !important;
  border-radius: 50%;
  margin-right: 12px;
`;

const ListItem = styled.div`
  border-bottom: 1px solid #EBEBEB;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  font-size: 16px;
`;

const ListItemHeader = styled.div`
  display: flex;
`;

const ProfileImageContainer = styled.div`
  flex-basis: 11%;
`;

const NameAndDateContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const NameText = styled.span`
  flex: 1;
  font-size: 16px;
`;

const DateText = styled.span`
  flex: 1;
  font-size: 14px;
`;


export {
  Container,
  HeaderContainer,
  HeaderRatingStars,
  TotalReviews,
  TotalReviewsText,
  SearchBox,
  SearchInput,
  RatingsContainer,
  RatingsLeftContainer,
  RatingsRightContainer,
  RatingTextAndStarsContainer,
  RatingText,
  RatingStars,
  Star,
  ReviewProfileImage,
  ListItem,
  ListItemHeader,
  ProfileImageContainer,
  NameAndDateContainer,
  NameText,
  DateText,
};
