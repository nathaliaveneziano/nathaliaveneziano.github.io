import { BlocksCard } from '../index';
import './blocksGrid.css';

function BlocksGrid({ data, className }) {
  return (
    <div className="blocks__container">
      <div className={`grid ${className || ''}`}>
        {data.map(
          ({
            id,
            title,
            category,
            image,
            techs = [],
            date = '',
            author = '',
            url = '',
            url_github = '',
            url_preview = '',
          }) => (
            <BlocksCard
              id={id}
              title={title}
              category={category}
              image={image}
              techs={techs}
              date={date}
              author={author}
              url={url}
              url_github={url_github}
              url_preview={url_preview}
              key={id}
            />
          )
        )}
      </div>
    </div>
  );
}

export default BlocksGrid;
