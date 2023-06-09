import { List, Item } from './MovieGallery.styled';
import { MovieGalleryItem } from './MovieGalleryItem';

// const sort = (key, arr, ascending = false) => {
//   if (isNum(key)) {
//     return [...arr].sort((a, b) => (b[key] - a[key]) * -ascending);
//   } else {
//   }
// };

// data = {results, ...}
export const MovieGallery = ({
  data = [],
  // поле должно быть числовым
  sortKey, //'vote_average',
}) => {
  const sorted = [...data]; //.sort((a, b) => b[sortKey] - a[sortKey]);

  return (
    data.length > 0 && (
      <List>
        {sorted.map(({ id, ...restProps }) => (
          <Item key={id}>
            <MovieGalleryItem id={id} {...restProps} />
          </Item>
        ))}
      </List>
    )
  );
};
