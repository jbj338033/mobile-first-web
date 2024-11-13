import styled from "@emotion/styled";
import { Header } from "../components/Header";
import { BiBookmarkHeart, BiHistory, BiHeart } from "react-icons/bi";

const Container = styled.div`
  padding: 0 20px;
`;

const ProfileCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  margin: 20px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff4757 0%, #ff6b81 100%);
  margin: 0 auto 16px;
`;

const ProfileName = styled.h2`
  margin: 0;
  color: #333;
  font-size: 24px;
`;

const ProfileBio = styled.p`
  color: #666;
  margin: 8px 0;
`;

const MenuList = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  margin: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 12px;
  border-bottom: 1px solid #f1f3f5;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #f8f9fa;
  }
`;

const MenuIcon = styled.div`
  color: #ff4757;
  font-size: 20px;
`;

const MenuText = styled.span`
  color: #333;
  flex: 1;
`;

const MenuCount = styled.span`
  color: #868e96;
  font-size: 14px;
`;

export default function Profile() {
  return (
    <>
      <Header title="프로필" />
      <Container>
        <ProfileCard>
          <ProfileImage />
          <ProfileName>사용자</ProfileName>
          <ProfileBio>맛집 탐험가 🍽️</ProfileBio>
        </ProfileCard>

        <MenuList>
          <MenuItem>
            <MenuIcon>
              <BiBookmarkHeart />
            </MenuIcon>
            <MenuText>저장한 맛집</MenuText>
            <MenuCount>12</MenuCount>
          </MenuItem>
          <MenuItem>
            <MenuIcon>
              <BiHistory />
            </MenuIcon>
            <MenuText>최근 본 맛집</MenuText>
            <MenuCount>36</MenuCount>
          </MenuItem>
          <MenuItem>
            <MenuIcon>
              <BiHeart />
            </MenuIcon>
            <MenuText>리뷰 작성한 맛집</MenuText>
            <MenuCount>8</MenuCount>
          </MenuItem>
        </MenuList>
      </Container>
    </>
  );
}
