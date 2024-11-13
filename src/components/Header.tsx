import styled from "@emotion/styled";
import { BiSearch, BiBot } from "react-icons/bi";

const HeaderContainer = styled.header`
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #ffe5e5;
  border-radius: 16px;
  padding: 12px 16px;
  gap: 8px;
  color: #ff6b6b;
  box-shadow: 0 4px 20px rgba(255, 107, 107, 0.1);
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  width: 100%;
  font-size: 16px;
  color: #333;
  outline: none;

  &::placeholder {
    color: #ff8e53;
    opacity: 0.6;
  }
`;

interface HeaderProps {
  title: string;
  showSearch?: boolean;
  showAiIcon?: boolean;
}

export function Header({
  title,
  showSearch = false,
  showAiIcon = false,
}: HeaderProps) {
  return (
    <HeaderContainer>
      <TitleContainer>
        {showAiIcon && <BiBot size={28} color="#ff4757" />}
        <Title>{title}</Title>
      </TitleContainer>
      {showSearch && (
        <SearchBar>
          <BiSearch size={20} />
          <SearchInput placeholder="맛집을 검색해보세요" />
        </SearchBar>
      )}
    </HeaderContainer>
  );
}
