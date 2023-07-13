import data from '../../data';
import { BlocksGrid } from '../../components';
import './blog.css';

function Blog() {
  const { blog } = data;

  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Blog</h2>

      <div className="blog__container">
        <div className="grid">
          <BlocksGrid data={blog} />
        </div>
      </div>
    </section>
  );
}

export default Blog;
