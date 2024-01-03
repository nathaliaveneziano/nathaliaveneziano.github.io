// deps
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
// components
import FilterArea from '../../FilterArea';
import BlocksGrid from '../../BlocksGrid';
// services
import db from '../../../services/firebase';
import { getBlog, getCategories } from '../../../services/queries';
// styles
import { SectionTitle, container, section } from '../../../globalStyles';

const BlogContainer = styled.section`
  ${container}
  ${section}
`;

function Blog() {
  const [blog, setBlog] = useState([]);
  const [items, setItems] = useState(blog);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getBlogData() {
      setBlog((await getBlog(db)) || []);
      setItems((await getBlog(db)) || []);
    }

    async function getCategoriesData() {
      setCategories((await getCategories(db)) || []);
    }

    getBlogData();
    getCategoriesData();
  }, []);

  const filters = [
    ...new Set(
      blog
        .filter((item) => item.active)
        .reduce((acc, { category }) => acc.concat(category), [])
        .filter((item) => item !== undefined)
    ),
  ];

  const filterCategories = ['Todos'].concat(
    categories.map(({ id, name }) => {
      if (filters.includes(id)) {
        return name;
      }
    })
  );

  const filterItems = (filterItem) => {
    const updatedItems = blog.filter((elem) => {
      if (filterItem === 'Todos' && elem.active) {
        return elem;
      }

      const findCategoryId = categories.find(
        (item) => item.name === filterItem
      );

      if (elem.active && elem.category === findCategoryId.id) {
        return elem;
      }
    });
    console.log(updatedItems.length);

    setItems(updatedItems);
  };

  return (
    <BlogContainer id="blog">
      <SectionTitle>Blog</SectionTitle>

      <FilterArea filters={filterCategories} callback={filterItems} />
      <BlocksGrid data={items} page="blog" />
    </BlogContainer>
  );
}

export default Blog;
