import styled from '@emotion/styled';
import { ButtonLink, FlexCentered, LinkPrimary } from 'styles/shared';

export const Container = styled.div`
  padding: 20px;
  background: linear-gradient(180deg, #ebebeb 0, transparent);
`;

export const AvatarAndName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AvatarThumb = styled.div`
  ${FlexCentered()};
  width: 60px;
  height: 60px;

  border-radius: 50%;
  overflow: hidden;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* При таком позиционировании видно лица на аватаре */
  object-position: top;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const HeaderGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  margin-top: 10px;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    align-items: flex-end;
  }
`;

export const SourceLink = styled(LinkPrimary)``;

// pre чтобы сохранить оригинальное форматирование
export const Content = styled.pre`
  font-family: inherit;
  line-height: 1.5;
  white-space: pre-wrap;
  overflow: hidden;
`;

export const Expander = styled(ButtonLink)`
  display: block;
  margin: 20px auto 0 auto;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: -0.2px;
  color: #a7a7a7;

  @media screen and (min-width: 768px) {
    margin: 20px 0 0 0;
  }
`;