import { useLocation } from 'react-router-dom';
import { PageTitle } from 'styles/shared';
import {
  Subtitle,
  PageHeaderContainer,
  PageHeaderTitle,
  PageHeaderRight,
  PageHeaderLeft,
} from './PageHeader.styled';

export const PageHeader = ({ title, subTitle, goBackCaption, children }) => {
  const location = useLocation();

  return (
    <PageHeaderContainer>
      <PageHeaderLeft>{location.pathname}</PageHeaderLeft>

      <PageHeaderTitle>
        {title && <PageTitle>{title}</PageTitle>}
        {subTitle && <Subtitle>{subTitle}</Subtitle>}
      </PageHeaderTitle>

      {children && <PageHeaderRight>{children}</PageHeaderRight>}
    </PageHeaderContainer>
  );
};
