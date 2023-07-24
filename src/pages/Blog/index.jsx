import { useContext, useState } from 'react';
import { styled } from 'styled-components';
import { BlocksGrid, RepoFilter } from '../../components';
import { SectionTitle, container, section } from '../../globalStyles';
import DataContext from '../../services/DataContext';

const BlogContainer = styled.section`
  ${container}
  ${section}
`;

function Blog() {
  const { blog } = useContext(DataContext);
  const [items, setItems] = useState(blog);

  const filters = ['Todos', ...new Set(blog.map((filter) => filter.category))];

  const filterItem = (filterItem) => {
    const updatedItems = blog.filter((elem) => {
      if (filterItem === 'Todos') {
        return elem;
      }

      const tag = filterItem.toLowerCase().replace('-', '').replace(' ', '');
      return elem.category === tag;
    });

    setItems(updatedItems);
  };

  return (
    <BlogContainer id="blog">
      <SectionTitle>Blog</SectionTitle>

      <RepoFilter filters={filters} callback={filterItem} />
      <BlocksGrid data={items} />
    </BlogContainer>
  );
}

export default Blog;
