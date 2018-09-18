import styled from 'styled-components';

const Container = styled.div`
  width: 600px;
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
`;

const TotalReviews = styled.div`
  flex: 1;
  margin: auto;
  font-size: 24px !important;
`;

const SearchBox = styled.div`
  flex: 1;
  margin-right: auto;
  align-self: center;
`;

const RatingsContainer = styled.div`
  display: flex;
  border-top: 1px solid #EBEBEB;
  padding-top: 20px;
  font-size: 16px;
`;

const RatingsLeftContainer = styled.div`
  flex: 1;
`;

const RatingsRightContainer = styled.div`
  flex: 1;
`;

const RatingStars = styled.span`
  color: #128488;
`;

const ReviewProfileImage = styled.img`
  width: 48px;
  border-radius: 50%;
  margin-right: 13px;
`;

const ListItem = styled.div`
  border-bottom: 1px solid #EBEBEB;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  font-size: 16px;
`;

export {
  Container,
  HeaderContainer,
  TotalReviews,
  SearchBox,
  RatingsContainer,
  RatingsLeftContainer,
  RatingsRightContainer,
  RatingStars,
  ReviewProfileImage,
  ListItem,
};
