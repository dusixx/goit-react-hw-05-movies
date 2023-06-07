import { List, Item } from './Trends.styled';
import { TrendsItem } from './TrendsItem';

export const Trends = ({
  data = [],
  // поле должно быть числовым
  sortKey = 'vote_average',
}) => {
  const sorted = [...data].sort((a, b) => b[sortKey] - a[sortKey]);

  return (
    <List>
      {sorted.map(({ id, ...restProps }) => (
        <Item key={id}>
          <TrendsItem id={id} {...restProps} />
        </Item>
      ))}
    </List>
  );
};
