import styled from "@emotion/styled";
import { BiBot, BiStar, BiWon } from "react-icons/bi";

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
`;

const RestaurantName = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
  color: #666;
  font-size: 14px;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #ff4757;
`;

const Tag = styled.span`
  background: #f8f9fa;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #666;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: 24px;
  border: 1px solid rgba(255, 107, 107, 0.1);
  box-shadow: 0 8px 30px rgba(255, 107, 107, 0.1);
  backdrop-filter: blur(12px);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 75%; // 4:3 aspect ratio
`;

const AiRecommendBadge = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255, 107, 107, 0.95);
  color: white;
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
  backdrop-filter: blur(4px);
`;

interface RestaurantCardProps {
  name: string;
  rating: number;
  priceRange: string;
  cuisine: string;
  image: string;
  tags: string[];
  isAiRecommended?: boolean;
}

export function RestaurantCard({
  name,
  rating,
  priceRange,
  cuisine,
  image,
  tags,
  isAiRecommended = false,
}: RestaurantCardProps) {
  return (
    <Card>
      <ImageContainer>
        <Image src={image} alt={name} />
        {isAiRecommended && (
          <AiRecommendBadge>
            <BiBot />
            AI 추천
          </AiRecommendBadge>
        )}
      </ImageContainer>
      <Content>
        <RestaurantName>{name}</RestaurantName>
        <InfoRow>
          <RatingWrapper>
            <BiStar />
            {rating.toFixed(1)}
          </RatingWrapper>
          <div>
            <BiWon /> {priceRange}
          </div>
          <div>{cuisine}</div>
        </InfoRow>
        <TagContainer>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagContainer>
      </Content>
    </Card>
  );
}
