import styled from "@emotion/styled";
import { Header } from "../components/Header";

const Container = styled.div`
  padding: 0 20px;
`;

const FilterBar = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 8px 0;
  margin: 16px 0;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterButton = styled.button<{ isActive?: boolean }>`
  padding: 10px 20px;
  border-radius: 30px;
  border: 1px solid
    ${(props) => (props.isActive ? "#FF6B6B" : "rgba(255, 107, 107, 0.1)")};
  background: ${(props) =>
    props.isActive
      ? "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)"
      : "rgba(255, 255, 255, 0.9)"};
  color: ${(props) => (props.isActive ? "white" : "#FF6B6B")};
  font-size: 15px;
  font-weight: ${(props) => (props.isActive ? "600" : "500")};
  white-space: nowrap;
  box-shadow: ${(props) =>
    props.isActive
      ? "0 4px 15px rgba(255, 107, 107, 0.3)"
      : "0 4px 10px rgba(0, 0, 0, 0.05)"};
  backdrop-filter: blur(8px);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.2);
  }
`;

const Map = styled.div`
  width: 100%;
  height: 400px;
  background: #e9ecef;
  border-radius: 16px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #868e96;
`;

const categories = ["전체", "한식", "일식", "중식", "양식", "카페", "술집"];

export default function Explore() {
  return (
    <>
      <Header title="맛집 지도" showSearch />
      <Container>
        <FilterBar>
          {categories.map((category, index) => (
            <FilterButton key={index} isActive={index === 0}>
              {category}
            </FilterButton>
          ))}
        </FilterBar>
        <Map>지도가 표시되는 영역</Map>
      </Container>
    </>
  );
}
