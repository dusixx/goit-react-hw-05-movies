import { List, Item } from './Trends.styled';
import { TrendsItem } from './TrendsItem';

export const Trends = ({
  value = [],
  // поле должно быть числовым
  sortKey = 'vote_average',
}) => {
  const sorted = [...value].sort((a, b) => b[sortKey] - a[sortKey]);

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
