import styled from "styled-components";

// Wrapper to standrize the Three boxes (Sort - Where to Watch - Filters) so they all have the same styling
const BoxWrapper = styled.div`
  background: var(--text-color);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-bottom: 20px;
  overflow: hidden;
  padding: 20px;
  transition: height 0.3s ease, box-shadow 0.3s ease;
  width: 100%;

  @media (max-width: 770px) {
    width: 100%;
  }
`;

export default BoxWrapper;
