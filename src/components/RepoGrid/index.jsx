import { RepoCard } from '../index';
import './repoGrid.css';

function RepoGrid({ data }) {
  return (
    <div className="repo__container">
      <div className="grid">
        {data.map(
          ({
            id,
            title,
            category,
            image,
            techs = [],
            url = '',
            url_github = '',
            url_preview = '',
          }) => (
            <RepoCard
              id={id}
              title={title}
              category={category}
              image={image}
              techs={techs}
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

export default RepoGrid;
