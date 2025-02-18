import { FC } from "react";
import s from "./loadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={s.container}>
      <button className={s.loadMore} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
