import styled from "@emotion/styled";

export const MovieCardWrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 200px;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 100%;

  @media (max-width: 770px) {
    max-width: 80%;
  }
`;

export const BlurWrapper = styled.div`
  transition: filter 0.3s ease;
  filter: ${(props) => (props.isBlurred ? "blur(4px)" : "none")};
`;

export const MovieImageWrapper = styled.div`
  position: relative;
`;

export const MovieImage = styled.img`
  width: 100%;
  border-radius: 10px;
  position: relative;
`;

export const MovieInfo = styled.div`
  text-align: left;
  margin-top: 10px;
`;

export const MovieTitle = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 5px;

  &:hover {
    color: #01b4e4;
  }
`;

export const MovieReleaseDate = styled.p`
  font-size: 0.9rem;
  color: #777;
`;
