import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import like from '../Assets/iconos/like.svg'
import save from '../Assets/iconos/save.svg'
import comment from  '../Assets/iconos/comment.svg';

const SkeletonCard = () => {

    return (
        <article className="card m-3">
          <Skeleton height={250} />
      <div className="card-body">
        <div className="card__userDetails d-flex align-items-center mb-2">
        <Skeleton circle={true} height={30} width={30} />
          <div className="d-flex flex-column">
            <Skeleton width={100} />
            <Skeleton width={100} />
          </div>
        </div>
        <Skeleton height={30} width={400} className="ms-4" />
        <ul className="d-flex flex-wrap p-0 ms-4">
          <li>
            <a href="/">
              <Skeleton width={70} />
            </a>
          </li>
          <li>
            <a href="/">
              <Skeleton width={70} />
            </a>
          </li>
          <li>
            <a href="/">
              <Skeleton width={70} />
            </a>
          </li>
        </ul>
        <div className="card__buttons d-flex ms-4">
          <div className="interactions d-flex">
            <div className="reactions d-flex me-4">
              <img src={like} alt="like icon" />
              <p>
                <Skeleton width={50} />
              </p>
            </div>
            <div className="comments d-flex">
              <img src={comment} alt="comment icon" />
              <p>
                <Skeleton width={100} />
              </p>
            </div>
          </div>
          <div className="tools d-flex">
            <p>
              <Skeleton width={70} />
            </p>
            <img src={save} alt="save icon"/>
          </div>
        </div>
      </div>
    </article>
      )
}

export const WsSkeleton = ({numberOf}) => {
	return (
		<SkeletonTheme baseColor="#626c7f" highlightColor="#535966">
			{[...new Array(numberOf)].map((_, i) => (
				<SkeletonCard key={i} />
			))}
		</SkeletonTheme>
	);
}
