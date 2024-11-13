import { useNavigate, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { BiHome, BiMap, BiUser } from "react-icons/bi";

const TabContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  max-width: 480px;
  margin: 0 auto;
  z-index: 1000;
`;

const TabButton = styled.button<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px;
  border: none;
  background: none;
  color: ${(props) => (props.isActive ? "#ff4757" : "#94a3b8")};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #ff4757;
  }
`;

const TabLabel = styled.span<{ isActive: boolean }>`
  font-size: 12px;
  font-weight: ${(props) => (props.isActive ? "600" : "400")};
`;

const IconWrapper = styled.div`
  font-size: 24px;
`;

export function BottomTab() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <TabContainer>
      <TabButton
        isActive={location.pathname === "/"}
        onClick={() => navigate("/")}
      >
        <IconWrapper>
          <BiHome />
        </IconWrapper>
        <TabLabel isActive={location.pathname === "/"}>홈</TabLabel>
      </TabButton>
      <TabButton
        isActive={location.pathname === "/explore"}
        onClick={() => navigate("/explore")}
      >
        <IconWrapper>
          <BiMap />
        </IconWrapper>
        <TabLabel isActive={location.pathname === "/explore"}>
          맛집지도
        </TabLabel>
      </TabButton>
      <TabButton
        isActive={location.pathname === "/profile"}
        onClick={() => navigate("/profile")}
      >
        <IconWrapper>
          <BiUser />
        </IconWrapper>
        <TabLabel isActive={location.pathname === "/profile"}>프로필</TabLabel>
      </TabButton>
    </TabContainer>
  );
}
